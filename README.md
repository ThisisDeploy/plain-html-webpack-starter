# Starter project for non-SPA using webpack

An extremely barebone starter project for when you just want to create a webpage the old way but still use webpack, ES6 and autoprefixer for common css issues.
Includes support for Sass and translations, which can both be ignored by removing the few lines connected to it.

## Project Includes
* Webpack for local/prod. See "Running".
* Translation for supporting several languages. The script handling the translation feature can be found in src/app.js.
* Partials by using html-loader in the templates. See how the menu is used in index.html and about.html for an example.
* Uses Sass with autoprefixer. See postcss.config for settings.
* normalize for removing common browser css quirks, can be removed by removing the import in app.js.
* Google analytics script. Configured through webpack.config, only applied in the production build (see "Running" further down)

### Short documentation of the translation script
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
2. webpack.config.js - Change title and description, change analytics tracking
3. language files if using translation, otherwise ignore or delete these parts (language files lives in src/languages, language script lives in app.js)
4. Add more html pages by adding new HtmlWebpackPlugins to the plugins section in src/webpack.config.js. We have added to pages to this skeleton so just copy paste one of them below the others and change the name and create a corresponding html file.

## Running
1. $ npm install
2. running local env: $ npm run start:dev
3. build: $ npm run build:prod
4. The build ends up in the bin folder. Copy paste the content here to the root of your server. Open index.html in this folder locally to check that everything works as expected.

Local webpack config is found in webpack.config.js, production in webpack.prod.js. Should be good to go but can be configured any way you want it.

## Contributing
We would love if you want to contribute to this project. Please see
[contributing](CONTRIBUTING.md) and our [code of conduct](CODE_OF_CONDUCT.md).
