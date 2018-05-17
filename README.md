# Starter project for non-SPA pages using webpack

An extremely barebone starter project for when you just want to create a webpage the old way but still webpack, ES6 and autoprefixer for css issues.
Includes support for Sass and translations, which can both be ignored by removing the few lines connected to it.

## Features
* Project has built in translation for supporting several languages. The script handling the translation feature can be found in src/app.js.
* Webpack for local/prod. See "Running".
* Uses Sass with autoprefixer. See postcss.config for settings.
* Includes normalize, can be removed by removing the import in app.js.

### Short ducumentation of translation feature
* Based on queryparam lang, used like http://localhost:8080/?lang=se (toggle swedish translation)
* Add more languages by adding more language files and load them in the language script. Check how its done for the current languages.
* Mark elements with data-t attribute to set a translation key to the element. Used like:

```html
<span data-t="nav.home">Home</span>
```

Maps to:
```javascript
translation: {
  nav: {
    home: <---
  }
}
```

in language file (languages/en.js, languages/sv.js)

* Automatically adds queryparam to all links, add data-skip attribute to links that should not get this (external links for example)

## Configuring
When using this in a new project, start with changing the following:

1. package.json - Fields related to the project (name, version description etc.)
2. index.html - Title and description
3. language files if using translation, otherwise ignore or delete these parts (language files lives in src/languages, language script lives in app.js)
4. Add more html pages by adding new HtmlWebpackPlugins to the plugins section in src/webpack.config.js. We have added to pages to this skeleton so just copy paste one of them below the others and change the name and create a corresponding html file.

## Running
1. $ npm install
2. running local env: $ npm run start:dev
3. build: npm run build:prod

Local webpack config is found in webpack.config.js, production in webpack.prod.js. Should be good to go but can be configured any way you want it.
