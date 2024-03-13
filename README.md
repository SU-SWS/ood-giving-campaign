# [Stanford Momentum](https://github.com/SU-SWS/ood-giving-campaign)

[![Netlify Status](https://api.netlify.com/api/v1/badges/738e5599-7329-41a1-8429-82f8540636d9/deploy-status?branch=dev)](https://app.netlify.com/sites/giving-campaign/deploys)

Description
---

Netlify hosted, Next.js built, Storyblok headless CMS site for the Stanford Momentum website.

Environment variable set up and installation
---

_Development_

1. Create a new `.env` file by cloning the `example.env` file provided:
`cp example.env .env`
2. Manually find and add the `VAULT_ROLE_ID` and `VAULT_ROLE_ID` to `.env`. You can likely find those values in the Netlify environment variables UI.
Or, you can retrieve the `VAULT_ROLE_ID` and `VAULT_ROLE_ID` by first running `netlify login` then `netlify link`, then use the `netlify env:get VAR_NAME` command. After that manually add them to `.env`
If you can't find them, please ask another developer on the team.
3. After the `VAULT_ROLE_ID` and `VAULT_SECRET_ID` environment variables have been added to .env, retrieve all other environment variables from the vault:
`npm run vault:local`
4. Install packages using `npm ci` or `npm install`
5. Then fire up your development server using Next.js
`npm run dev`

We use the netlify-plugin-vault-variables to fetch the correct environment variables from the vault. For more information, please see:
https://github.com/SU-SWS/netlify-plugin-vault-variables/#environment-variable-strategy-with-vault

Using the Storyblok Editor on localhost
---

Currently Storyblok v2 doesn't allow accessing the environment with http, so to make it work, https has to be added to localhost. For your convenience we have created the certificate and key but your system may not trust this self signed cert. Once you have localhost up and running you can visit the url in the browser and proceed past the warning or you can add the certificate to your trusted list.

OSX:
https://readwriteexercise.com/posts/trust-self-signed-certificates-macos/

To start:

1. Do `npm run dev` in one terminal. You'll be able to view the development build in your browser at http://localhost:8000/

2. In another terminal, do `npm run https-proxy-start`

3. After that, you can go back to Storyblok and select the https://localhost:3010 URL in the visual editor. When you're doing this for the first time, you'll have to click the "Preview" button to pop the preview into its own tab out of the iframe and click past the browser warning to proceed to view the site.

4. You can now go back to the Storyblok visual editor and hit the reload icon button (curved arrow) and preview the site in the iframe.


Authentication
---
To protect unpublished content, all the previews are currently for authenticated users only. Please contact the admin of this repo for login information.

Linting and Type Check
---

We use the default Next.js [eslint-config-next](https://nextjs.org/docs/app/building-your-application/configuring/eslint#eslint-config) with the core web vitals rule set as our linting configuration.

To run ESLint:
- `npm run lint` to check your .js, .jsx, .ts and .tsx files in the /src directory for warnings and errors.
- `npm run lint:fix` to fix any fixable issues and displays the ones that need to be manually fixed.

To run type heck:
- `npm run typecheck` will check for any typescript errors.

Components
---

All the React components in this projects can be found under the `src/components/` directory. Components that are connected to Storyblok are in the subdirectory `src/components/Storyblok'.

TailwindCSS
---

We installed the [official TailwindCSS container query plugin](https://github.com/tailwindlabs/tailwindcss-container-queries), but due to no support for Safari version 15 and earlier, please only use it for progressive enhancement.

Rendering and Caching Strategy
---
You can find details on the [rendering and caching strategy](https://docs.google.com/document/d/195IcFOiD38lB3ZavIwRXW74FseMplvdyH_C83efGxSc/edit) for this site on Netlify using Storyblok in Google Drive.

Release Workflow
---

- Create branch from `dev` (or commit ref from `dev`) with `release/` prefix (e.g. `release/my-cool-release`)
- Create a pull request from your `release/my-cool-release` branch into `main`
- Add the appropriate semver label to your PR. Availabel labels: `patch`, `minor`, `major`, `rc`, `alpha`, `beta`
- On PR approval, do a standard **merge commit** (not a squash commit) into `main`

Merges to `main` will kickoff the following tasks:
- Semver version bump
- Publish github release
- Netlify production build and deploy
- Merge changes back into `dev`
