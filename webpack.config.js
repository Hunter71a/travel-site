const path = require('path')

module.exports = {
 entry: "./app/assets/scripts/App.js",
 output: {
  filename: 'bundled.js',
  path: path.resole(__dirname, 'app')
 },
 mode: 'development'
}