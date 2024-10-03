# ENVIRONMENT VARIABLES

Environment variables are contextually used in Netlify. See [this documentation](https://www.npmjs.com/package/netlify-plugin-contextual-env) for information about using the prefix naming convention. You can use this strategy in this project. 

For example:  

Default value: `MY_TOKEN`  
Production value: `PRODUCTION_MY_TOKEN`  
Preview value: `DEPLOY_PREVIEW_MY_TOKEN`  
Dev branch value: `DEV_MY_TOKEN`  

## VAULT_ROLE_ID
*Required*  
example: `a1bg13234-1234-ab12-a1b2-1a2d5y9s6g5s`

This is the role ID that is used to fetch the variables from vault.stanford.edu on builds or when running `npm run vault`

## VAULT_SECRET_ID
*Required*  
example: `a1bg13234-1234-ab12-a1b2-1a2d5y9s6g5s`

This is the secret ID that is used to fetch the variables from vault.stanford.edu on builds or when running `npm run vault`

## VAULT_OVERWRITE
*Optional*  
*Values:* true | false  

When pulling values from vault, set to true to overwrite the values you have in your `.env` file and set to false to only add new items.

## LOCAL_STORYBLOK_ACCESS_TOKEN
*Optional*  
example: `a456d8asd6f8asdfas5afs64`  

An optional override variable for local development. When running `npm run vault` this value replaces the value in `STORYBLOK_ACCESS_TOKEN`. You should set this to a `preview` token for the Storyblok Space.

## NEXT_PUBLIC_STORYBLOK_ACCESS_TOKEN
*Required*  
example: `a456d8asd6f8asdfas5afs64`  

This is a public token that gets compiled into the front end build. This should be a `public` scoped token of the Storyblok space.

## PRODUCTION_STORYBLOK_ACCESS_TOKEN
*Required*  
example: `a456d8asd6f8asdfas5afs64`  

This token is used in production Netlify environment builds. This should be set to your production Storyblok Space and ideally using a `public` scoped token to ensure no draft content ever makes it to production builds.

## STORYBLOK_ACCESS_TOKEN
*Required*  
example: `a456d8asd6f8asdfas5afs64`  

This is the default Storyblok API access token. This can be set as a `preview` scoped token and is used in all non-production environments. 

## STORYBLOK_PREVIEW_EDITOR_TOKEN
*Required*  
example: `a456d8asd6f8asdfas5afs64`  

This is the preview editor token and is used to authenticate the Storyblok visual editor. This token needs to match the token in the Storyblok visual editor token in the url parameter. You can manage the visual editor urls in Storyblok and change this token. It must be scoped to a `preview` token in order to work with draft content in the visual editor.

## STORYBLOK_WEBHOOK_SECRET
*Required*  
example: `oEk69ba5EBQHtX2`  

This secret is used to validate the webhook calls from Storyblok. At the time of writing this documentation it is used in the background function that delegates builds.

## NETLIFY_DEPLOY_HOOK_ID
*Required*  
example: `7896as5fa5sdf8as9df4as7a`

This is the webhook id of a netlify build webhook for the branch/environment to build. You can find it on the end of the URL `https://api.netlify.com/build_hooks/{ID HERE}` and is created in the deploy configuration in Netlify.

## SLACK_WEBHOOK
*Optional*  
example: `https://hooks.slack.com/services/AB6A8DF7F/B9D89SD8D/0AD89S8F97SD8F7S8FS8DF7A`

The Slack channel webhook to post to for build notifications.

## STORYBLOK_SLUG_PREFIX
*Optional*
default: `tour`

The `slug` of the content directory in the Storyblok space. No trailing space. This is used to strip and append the slug in the application where needed. The slug will be stripped when creating links across the front end of the website and is added when fetching content from the Storyblok API.

