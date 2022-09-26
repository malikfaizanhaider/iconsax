'use strict'

const codepoints = require('./font/iconsax.json')

module.exports = {
  inputDir: './icons', // (required)
  outputDir: './font', // (required)
  fontTypes: ['woff2', 'woff'],
  assetTypes: ['css', 'scss', 'json'],
  name: 'iconsax',
  codepoints,
  prefix: 'isax',
  selector: '.isax',
  fontsUrl: './fonts',
  formatOptions: {
    json: {
      indent: 2
    }
  },
  // Use a custom Handlebars template
  templates: {
    css: './build/font/css.hbs',
    scss: './build/font/scss.hbs',
    html: './build/font/html.hbs'
  },
  pathOptions: {
    json: './font/iconsax.json',
    css: './font/iconsax.css',
    scss: './font/iconsax.scss',
    html: './font/index.html',
    ttf: './font/fonts/iconsax.ttf',
    woff: './font/fonts/iconsax.woff',
    woff2: './font/fonts/iconsax.woff2',
    eot: './font/fonts/iconsax.eot'
  }
}
