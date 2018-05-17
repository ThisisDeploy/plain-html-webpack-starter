module.exports = {
  plugins: [
    require('postcss-smart-import')({ /* ...options */ }),
    require('precss')({ /* ...options */ }),
    require('postcss-flexbugs-fixes'),
    require('autoprefixer')({
      remove: false, /*We have no legacy so this should make it 10% faster*/
      browsers: [
        'last 3 versions',
        'IE 10'
      ]
    })
  ]
}
