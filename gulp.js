'use strict'
const gulp = require('gulp'),
  svgSprite = require('gulp-svg-sprite'),
  plumber = require('gulp-plumber'),
  baseDir = 'src/',   // <-- Set to your SVG base directory
  svgGlob = '**/*.svg',       // <-- Glob to match your SVG files
  outDir = '.',     // <-- Main output directory
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
        sprite: "iconsax-sprite.svg",
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
      dest: 'iconsax',
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
      convertColors: {
        currentColor: true
      }
    }
  ]
}

// set svgo config
config.shape.transform[0].svgo = svgoConfig

gulp.task('svgSprite', function () {
  return gulp.src(svgGlob, {cwd: baseDir})
    .pipe(plumber())
    .pipe(svgSprite(config)).on('error', function (error) {
      console.log(error)
    })
    .pipe(gulp.dest(outDir))
})
