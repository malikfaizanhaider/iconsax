'use strict'
const gulp = require('gulp'),
  svgSprite = require('gulp-svg-sprite'),
  plumber = require('gulp-plumber'),
  baseDir = 'cards-src/',
  svgGlob = '**/*.svg',
  outDir = '.',
  config = {
    log: "info",
    svg: {
      xmlDeclaration: false,
      doctypeDeclaration: false,
      namespaceIDs: false,
      dimensionAttributes: false,
      rootAttributes: {
        class: 'iconsax-sprite',
      },
    },
    mode: {
      symbol: {
        dest: '.',
        sprite: "card-sprite.svg",
        prefix: '.isax-%s'
      },

    },
    shape: {
      id: {
        pseudo: '~',
        whiteSpace: '_',
        separator: "-",
        generator: "%s",
      },
      // import svgo config from file
      transform: [{}],
      dimension: {
        maxWidth: 24,
        maxHeight: 24,
        attributes: false
      },
      spacing: {},
      dest: 'iconsax/',
      meta: '.'
    },
    variables: {
      mapname: 'src',
    }
  }

// make svgo config
const svgoConfig = {
  plugins: [
    {
      stroke: {

      }
    }
  ]
}

// set svgo config
config.shape.transform[0].svgo = svgoConfig

gulp.task('CardSprite', function () {
  return gulp.src(svgGlob, { cwd: baseDir })
    .pipe(plumber())
    .pipe(svgSprite(config)).on('error', function (error) {
      console.log(error)
    })
    .pipe(gulp.dest(outDir))
})
