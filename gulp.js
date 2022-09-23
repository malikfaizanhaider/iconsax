'use strict';

const gulp = require('gulp'),
  svgSprite = require('gulp-svg-sprite'),
  plumber = require('gulp-plumber'),
  baseDir = 'icons/',   // <-- Set to your SVG base directory
  svgGlob = '**/*.svg',       // <-- Glob to match your SVG files
  outDir = '.',     // <-- Main output directory
  config = {
    log: "info",
    shape: {
      id: {
        separator: "-",
        generator: "%s"
      },
    },
    svg: {
      xmlDeclaration: false,
      doctypeDeclaration: false,
      namespaceIDs: false,
      dimensionAttributes: false
    },
    mode: {
      symbol: true,
      sprite: "iconsax-sprite.svg"
    }
  };

gulp.task('svgSprite', function () {
  return gulp.src(svgGlob, {cwd: baseDir})
    .pipe(plumber())
    .pipe(svgSprite(config)).on('error', function (error) {
      console.log(error);
    })
    .pipe(gulp.dest(outDir))
});
