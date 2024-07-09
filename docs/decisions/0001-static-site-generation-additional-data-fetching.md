# Use Markdown Any Decision Records

## Context and Problem Statement

We want to be able to statically and atomically build this website, support a dynamic front end UI, and provide real time client side rendering in the Storyblok visual editor. In Nextjs
developers can interweave client and server components as long as the server components are passed as children into the client components. This becomes problematic when using the
`<StoryblokStory />` component from Storyblok's library. As this component is a client component all server components would have to be passed in as children. To support components that
need to make additional fetches for data, we need a way to do that and still support client side rendering for the visual editor.

## Considered Options

* Moving to full SSR and ISR build
* Client side fetching of StoryList content
* Interwoven client/server templates

## Decision Outcome

Fetch and pass data as `extra` prop from the page.tsx server component down into the `<StoryblokStory />` client component

* Component rendering and nested delegation of the component tree still happens in the CreateBloks and other nested components
* Extra data should be fetched at the page level and abstracted into a function that can be used in both the editor and page [slug] route
* Client side fetching is still allowed but where we can pre-render and statically cache the better
* Where you can, fetch based off of the component needing the data existing in the page/picker vs by path to allow for mobility.
* By fetching at the initial page request and rendering all other components as client components, we can continue to support the client side rendering of the visual editor.
