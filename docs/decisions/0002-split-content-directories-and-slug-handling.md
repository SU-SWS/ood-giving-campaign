# 2. Split Content Directories and Slug Handling

Date: 2024-09-30

## Context

We are restructuring a Storyblok Space to support multiple site builds by splitting the content directories. This change requires adjusting both how the content is stored and how links are generated. The main challenge is ensuring the content remains organized while maintaining a seamless user experience for content authors.

## Decision

The solution we selected involves handling slug sanitization and modification at the site code level. This method was chosen because it strikes a balance between minimizing effort for developers and maintaining a simple workflow for content authors. Implementing something like the Advanced Paths App in Storyblok was considered, but it would add unnecessary complexity for authors. While the app could be useful, it risks being overlooked or forgotten in the UI, increasing the likelihood of confusion.

By managing slug prefix sanitization at the code and component level, we ensure that authors can work with content in a way that feels as familiar as having a single site in the space. Meanwhile, the Storyblok application remains happy with unique slugs and paths, which is critical for ensuring proper functionality across multiple sites.

## Alternatives Considered

1. **Storyblok's Advanced Paths App**  
   This option was rejected because it doesn’t resolve the issue of two sites sharing the same slug. For example, it’s not possible to have multiple stories with the same `contact` slug or `real_path`, regardless of their location in the content directory. Therefore, the Advanced Paths App wouldn't be a sufficient solution for the problem of duplicate slugs across different sites.

2. **Netlify Rewrites**  
   This approach involved using Netlify to create a proxy rewrite that would automatically adjust slug prefixes to create clean URLs. However, this method would not work in a local environment and could lead to confusion when debugging or handling different environments. While not a terrible option, it added unnecessary complexity.

3. **Scoped API Keys**  
   Scoped API keys help with content-fetching limitations by defining access levels for specific content. However, they do not solve the slug duplication issue, making this approach irrelevant for the current challenge.

## Consequences

Developers will need to be mindful of how slugs are handled in the codebase. When fetching content from Storyblok, the full slug (including the prefix) must be used. However, when creating pages or linking to specific paths, developers will need to strip the prefix from the URL string to ensure correct routing and navigation. This requires a level of attentiveness, but ensures that the system remains flexible and functional across multiple site builds.
