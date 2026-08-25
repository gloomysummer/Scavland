# Scavland Field Notes

Independent, evidence-led English guide site for Scavland. This is a separate project from Sandustry and has its own Git history and deployment configuration.

## Local development

```sh
npm install
npm run dev
npm run build
```

The planned production domain is `https://scavland.wiki`; update `astro.config.mjs` and the canonical metadata before deploying to another domain.

## Evidence policy

Pages distinguish `Official`, `Personal in-game test`, `Community demonstration` and `Unverified` claims. Authorized local media is stored under `public/images/`; the excluded `hero/capsule_616x353.jpg` source file was an HTML response rather than an image.

## Scope

The first release focuses on the homepage, eight guide intents, updates, FAQ, search and trust pages. Codes, mobile, console, downloads and fixed loot/recipe tables are intentionally excluded until supported by primary evidence.
