# 2. Split content directories and slug handling

Date: 2024-09-30

## Context

Splitting a Storyblok Space's content directories to support multiple site builds. This requires handling and refactoring of the current codebase to handle the change to where the content is store but also how links are build.

## Decision

Slug sanitization handling and altering at the site code level was chosen as it strikes the best balance of effort and change for content authors. Introducing something like the Advanced Paths App for content authors would introduce another layer of complexity for them that they could be trained on but it is something that is easily lots and forgotten about in the Storyblok UI. By handling the prefix sanitization at the code and component layer we will be able to keep the content author user experience as similar to having just one site in the space as possible and keep the Storyblok application happy by having unique slugs and paths for everything.

## Alternatives Considered

1. **Storyblok's advanced paths app**  
This was not chosen as the advanced paths did not solve the issue of two sites having the same slug. IE: multiple stories cannot have the same `contact` slug or `real_path` no matter where they are in the content directory.

2. **Netlify rewrites**  
Create a proxy re-write that rewrites all slug prefixes to the clean url. This would not work on local and could be confusing. Still not a terrible option IMHO.

3. **Scoped API keys**  
Does not solve the slug problem but does help with content fetching scope.

## Consequences

Developers will have to be aware and savvy to the handling of the slugs. When fetching content from Storyblok they must use the full slug. When Creating pages or linking to paths they must strip the prefix from the url string. 
