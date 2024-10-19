# 4. Font loading

Date: 2024-10-18

## Context and Problem Statement

We have various fonts on the site including a Google font and custom fonts that are included as static assets in the repository. We want to ensure that our strategy works well with our tech stack and is able to make use of any optimization available.

## Decisions

* We make use of the [next/font API](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) that is available out of the box with our Next.js installation. It enables automatic self-hosting of any fonts which eliminates external network requests for improved performance and privacy.
* For our Google Fonts, we make use of the [next/font/google API](https://nextjs.org/docs/app/building-your-application/optimizing/fonts#google-fonts) which downloads any CSS and font files at build time and self host them along with any other static assets on the site. We are also able to limit the subset to "latin" which reduces the font file size and further improves performance.
* For the other custom fonts, we include them as static assets in the `public/fonts/` directory. We make use of the [next/font/local API](https://nextjs.org/docs/app/building-your-application/optimizing/fonts#local-fonts) for out of the box optimization. To use these [custom fonts with Tailwind CSS](https://nextjs.org/docs/app/building-your-application/optimizing/fonts#with-tailwind-css) font family utilities, we load our custom fonts with the `variable` option which assigns a CSS variable to each font. After that, we reference these CSS variables in our custom Tailwind font family theme file `tailwind/plugins/theme/gc-fontFamily.js` which will generate the font- CSS classes that we can use for styling our components.
* For local fonts, we are only including the `.woff2` format font files since it is supported by all the browsers we support.
