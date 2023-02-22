# [Giving Campaign](https://github.com/SU-SWS/ood-giving-campaign)

Description
---

Netlify hosted, Gatsby built, storyblok headless CMS site for Giving Campaign.

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
5. Then fire up your development server using Gatsby
`npm run dev`

Using the Storyblok Editor on localhost
---

Currently Storyblok v2 doesn't allow accessing the environment with http, so to make it work, https has to be added to localhost. For your convenience we have created the certificate and key but your system may not trust this self signed cert. Once you have localhost up and running you can visit the url in the browser and proceed past the warning or you can add the certificate to your trusted list.

OSX:
https://readwriteexercise.com/posts/trust-self-signed-certificates-macos/

To start:
```
npm run dev
npm run https-proxy-start
```

