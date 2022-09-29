'use strict'

const gulp = require('gulp'),
  svgSprite = require('gulp-svg-sprite'),
  plumber = require('gulp-plumber'),
  baseDir = 'src/',
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

const svgoConfig = {
  plugins: [
    {
      addAttributesToSVGElement: {
        attribute: 'focusable="false"'
      }
    },
    {
      convertColors: {
        currentColor: true,
      }
    }
  ]
}

const svgo = require('gulp-svgo')(svgoConfig)

gulp.task('svgSprite', function () {
  return gulp.src(svgGlob, {cwd: baseDir})
    .pipe(svgo)
    .pipe(plumber())
    .pipe(svgSprite(config)).on('error', function (error) {
      console.log(error)
    })
    .pipe(gulp.dest(outDir))
})
