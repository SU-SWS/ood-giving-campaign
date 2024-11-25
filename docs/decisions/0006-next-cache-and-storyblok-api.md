# 6. Next cache and Storyblok API

Date: 2024-10-23

## Context

Save on API calls and build time by caching the Storyblok API responses

## Decision

Provide a Nextjs cached and uncached option for developers to fetch from the Storyblok API through utility functions. The utility functions will have sensible defaults and allow developer to opt in to them. Developers are encouraged to use the utility functions and to create their own cached versions as well. 

We are still using the Storyblok API cache through the storyblok js client as it handles cache invalidation 'automagically'.

Storyblok API Cache
* https://www.storyblok.com/docs/api/content-delivery/v2/getting-started/cache-invalidation
* https://www.storyblok.com/tp/optimize-your-caching-strategy-with-storyblok

Storyblok JS Client Cache
* https://github.com/storyblok/storyblok-js-client/#activating-request-cache

Nextjs Unstable Cache
* https://nextjs.org/docs/app/api-reference/functions/unstable_cache

## Consequences

* Caching in Nextjs should help mitigate against multiple API calls for the same thing on a single build
* Developers will need to opt-in to using the cache as it is not a default
* The utility functions are caching 'indefinitely' as they should be cleared on every build.
