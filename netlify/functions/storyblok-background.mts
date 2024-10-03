import dotenv from 'dotenv';
import { type Config } from '@netlify/functions';
import { createHmac } from 'node:crypto';
import StoryblokClient, { ISbStoryParams } from 'storyblok-js-client';

// LOAD ENV VARIABLES.
// ---------------------------------------------------
dotenv.config();

// NETLIFY FUNCTION CONFIG.
// ---------------------------------------------------
export const config: Config = {
  path: '/webhook/storyblok',
};

// HELPER FUNCTIONS.
// ---------------------------------------------------

/**
 * Trigger a Netlify build using a build hook.
 *
 * @param hookID The id of the hook.
 * @throws Error if the build could not be triggered.
 * @returns void
 */
const triggerNetlifyBuild = async (hookID) => {
  console.log('Triggering deploy for:', hookID);
  const deployUrl = `https://api.netlify.com/build_hooks/${hookID}`;
  const res = await fetch(deployUrl, {
    method: 'POST',
    body: JSON.stringify({}),
  });

  if (!res.ok) {
    throw new Error('Failed to trigger deploy');
  }

  console.log('Deploy triggered for:', hookID);
}

/**
 * Pings a Slack webhook with a message.
 *
 * @param message the message
 * @returns void
 * @throws Error if the Slack webhook could not be pinged.
 */
const pingSlack = async (message: string) => {
  const slackWebhook = process.env.SLACK_WEBHOOK ?? '';
  const URL = process.env.DEPLOY_PRIME_URL || process.env.URL;
  const ENV = process.env.CONTEXT || process.env.SITE_NAME;

  if (!slackWebhook) {
    console.error('No Slack webhook');
    return;
  }

  try {
    const res = await fetch(slackWebhook, {
      method: 'POST',
      body: JSON.stringify(
        {
          text: message,
          blocks: [
            {
              type: 'section',
              text: {
                type: 'mrkdwn',
                text: message,
              },
            },
            {
              type: 'section',
              text: {
                type: 'mrkdwn',
                text: `*Environment:* ${ENV}`,
              },
            },
            {
              type: 'section',
              text: {
                type: 'mrkdwn',
                text: `*URL:* ${URL}`,
              },
            }
          ],
        }
      ),
    });

    if (!res.ok) {
      console.error('Failed to ping Slack');
    }
  } catch (error) {
    console.error('Failed to ping Slack:', error);
  }
}

/**
 * Fetches a story from Storyblok.
 *
 * @param storyID the story ID
 * @returns the story object
 * @throws Error if the story could not be fetched
 */
const fetchStory = async (storyID: string) => {
  console.log('Fetching story:', storyID);
  const context = process.env.CONTEXT;
  let sbToken;
  if (context === 'production') {
    sbToken = process.env.PRODUCTION_STORYBLOK_ACCESS_TOKEN || process.env.STORYBLOK_ACCESS_TOKEN;
  } else {
    sbToken = process.env.STORYBLOK_ACCESS_TOKEN;
  }
  const sbConfig = {
    accessToken: sbToken,
    region: 'us'
  };
  const sbParams = {
    version: 'draft' as ISbStoryParams['version'],
    cv: Date.now(),
    by_ids: storyID
  }
  const sbClient = new StoryblokClient(sbConfig);
  const { data } = await sbClient.getStories(sbParams);

  if (data && data.stories && data.stories.length) {
    console.log('Story fetched:', data.stories[0].full_slug);
    return data.stories[0];
  }

  throw new Error('Story not found');
}

/**
 * Validates the request.
 *
 * @param req the request
 * @param netlifyHookID the Netlify hook id
 * @param webhookSecret the webhook secret
 * @returns true if the request is valid
 * @throws Error if the request is invalid
 */
const validateRequest = async (req: Request, netlifyHookID:string, webhookSecret: string) => {
  console.log('Validating request');
  const signature = req.headers.get('webhook-signature') ?? '';

  if (!signature) {
    throw new Error('No signature');
  }

  if (!netlifyHookID) {
    throw new Error('Missing deploy info');
  }

  // Clone the req so we can read the body elsewhere.
  const reqClone = req.clone();
  const rawData = await reqClone.text();

  if (!rawData) {
    throw new Error('No payload');
  }

  const generatedSignature = createHmac('sha1', webhookSecret).update(rawData).digest('hex');

  if (signature !== generatedSignature) {
    throw new Error('Wrong signature');
  }
  console.log('Request validated');
  return true;
}

// NETLIFY FUNCTION HANDLER.
// ---------------------------------------------------
export default async (req: Request) => {
  console.log('++++++++ START WEBHOOK ++++++++');
  const slugPrefix = process.env.STORYBLOK_SLUG_PREFIX ?? 'momentum';
  const netlifyHookID = process.env.NETLIFY_DEPLOY_HOOK_ID ?? '';
  const webhookSecret = process.env.STORYBLOK_WEBHOOK_SECRET ?? '';

  pingSlack('Storyblok webhook triggered');

  // VALIDATE THE REQUEST AND PAYLOAD.
  // ---------------------------------------------------
  try {
    await validateRequest(req, netlifyHookID, webhookSecret);
  }
  catch (error) {
    console.error('Error:', error);
    return;
  }

  // REQUEST AND PAYLOAD OK.
  // ---------------------------------------------------

  // Check the payload for the action and for the full_slug.
  // If the full slug starts with with the configured slug prefix trigger a netlify build.
  // Otherwise do nothing.
  // For everything else trigger a build.

  // Get the payload.
  let payload;
  try {
    console.log('Parsing payload');
    payload = await req.json();
  }
  catch (error) {
    console.error('Error:', error);
    pingSlack(`Failed to parse payload: ${error}`);
    return;
  }

  // Trigger a build if the action and full_slug meet the slug prefix.
  // This handles the publish and unpublish actions for stories.
  if (payload.action && payload.full_slug && payload.full_slug.length) {
    console.log('Handling published/unpublished story');
    if (!payload.full_slug.startsWith(slugPrefix)) {
      console.log('No build needed');
      return;
    }
  }

  // The moved action doesn't include the full_slug so we need to fetch the story to get it.
  // This handles the moved action for stories.
  if (payload.action === 'moved' && payload.story_id) {
    console.log('Handling moved story');
    const { story_id } = payload;
    let story;
    try {
      story = await fetchStory(story_id);
    } catch (error) {
      console.error('Error:', error);
      pingSlack(`Failed to fetch story: ${error}`);
      return;
    }
    const { full_slug } = story;
    if (!full_slug || !full_slug.startsWith(slugPrefix)) {
      console.log('No build needed');
      return;
    }
  }

  // For everything else trigger a build.
  // Trigger a build.
  try {
    await triggerNetlifyBuild(netlifyHookID);
  }
  catch (error) {
    console.error('Error:', error);
    pingSlack(`Failed to trigger build: ${error}`);
  }

  console.log('++++++++ END WEBHOOK ++++++++');
};


