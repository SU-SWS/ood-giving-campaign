# 5. Storyblok Config Blok

Date: 2024-10-22

## Context

Global and site wide and specific configuration that is editable by content authors 

## Decision

Creating a central and content author editable configuration blok in Storyblok was chosen to create a centralized place for site configuration. For example, default SEO information like the site title and description should have a single place to change that is available to content authors. This centralized place for site configuration can lead to other global configuration like 'block from search engines' (nobots) or maintenance mode in the future. 

The possibility for creating other site configuration bloks is open if separation of configuration is needed but the general idea is that we should use and build upon the existing one.

## Consequences

There is now a need to pull a configuration block from Storyblok when building page metadata. 
