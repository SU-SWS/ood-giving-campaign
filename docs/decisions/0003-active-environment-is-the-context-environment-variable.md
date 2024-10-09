# 3. Active environment is the CONTEXT environment variable

Date: 2024-09-30

## Context

Builds need to be able to pull either just the published content or all of the content no matter the status. This is done through the Storyblok API token that is used and its type, and by setting the `version` and `cv` parameters when fetching from Storyblok's API. 

## Decision

 Previously, production builds were determined by the `NODE_ENV` and whether or not `npm run build` was being run. Now, the active environment is determined by the `CONTEXT` environment variable. This variable can be found and is heavily used on our Netlify site's already. For local development, a developer only needs to set this to `production` to be able to test a production like build. 

## Consequences

Developers will need to understand the new conditions for `production` and everything else. Dev branches and preview builds will contain unpublished stories and will need to be hidden from the public. 
