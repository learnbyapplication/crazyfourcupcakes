# Crazy Four Cupcakes
## Work In Progress

This is a redesign for http://crazyfourcupcakes.com

### Technology
This site is built using [NUXT](https://nuxtjs.org/) as a static site generator.
NUXT makes use of [vue.js](https://vuejs.org/) under the hood.
Additionally, this redesign uses the [bulma](https://bulma.io/) CSS framework.
The majority of the site is written using the [pug](https://pugjs.org/) HTML Preprocessor, the [sass](https://sass-lang.com/) CSS preprocessor (using sass syntax over scss syntax), and [typescript](https://www.typescriptlang.org/), although [markdown](https://www.markdownguide.org/) is used over pug in specific cases.

### Development
- Clone and fork the repository
- Install node dependencies
  - `npm ci` or `npm install`
- Run locally via `npm run dev`
  - Access development site at `http://localhost:3000`

### Notes on Layout
- `docs` is the auto-generated static site created from `npm run build`
  - Do not manually modify code here
- `config` stores configuration data
- `assets` stores static content (site wide css, images, etc)
- `src` stores the code source
  - `index.ts` is so tslint shuts up
  - `layouts` stores different page layous
  - `pages` stores each individual page
  - `components` stores small components that make up the application as a whole
