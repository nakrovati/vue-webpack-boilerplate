# vue-webpack-boilerplate

Vue webpack boilerplate is a frontend template for creating web applications and websites.

It includes many popular technologies to help you write clean and productive code.

* [Homepage](https://github.com/nakrovati/vue-webpack-boilerplate)

## Install

```bash
git clone https://github.com/nakrovati/vue-webpack-boilerplate
cd vue-webpack-boilerplate
npm i
npm run dev
```

## Features

* Favicons and SVG support. Also includes an svgo-loader that minifies svg files.
* SASS. Includes SASS support in HTML, SASS/SCSS and Vue files.
* PostCSS. Includes autoprefixer and CSSO minifier.
* Babel.
* Prettier.
* Eslint.
* Stylelint.
* Webpack bundle analyzer. To analyze the bundle you need to run 2 commands:
  1. ```npm run build:stats``` Creates a stats.json file in the root directory, which contains information about the bundle.
  2. ```npm run build:report``` Runs webpack bundle analyzer in the browser.

* Jsconfig.

## Browser support

Vue-webpack-boilerplate supports the latest, stable releases of all major browsers.

```text
last 3 year
```

[Full list of supported browsers.](https://browserslist.dev/?q=bGFzdCAzIHllYXJz)
