#!/usr/bin/env node
// Builds the distributable stylesheet: dist/system7.css
//
// - inlines every icon/*.svg as a data URI (no relative-icon 404s downstream)
// - flattens CSS custom properties and calc() for old-browser safety
// - copies the webfonts next to the CSS (url() rewritten to flat relative paths)
// - minifies, adds a version banner, emits a source map
//
// Extracted from the legacy build.js, whose docs half targeted the removed
// docs/index.html.ejs; the Eleventy site under web/ handles docs now.
const fs = require("fs");
const mkdirp = require("mkdirp");
const postcss = require("postcss");

const { homepage, version } = require("./package.json");

const input =
  `/*! system7.css v${version} - ${homepage} */\n` + fs.readFileSync("style.css");

postcss()
  .use(require("postcss-inline-svg"))
  .use(require("postcss-css-variables"))
  .use(require("postcss-calc"))
  .use(require("postcss-copy")({ dest: "dist", template: "[name].[ext]" }))
  .use(require("cssnano"))
  .process(input, {
    from: "style.css",
    to: "dist/system7.css",
    map: { inline: false },
  })
  .then((result) => {
    mkdirp.sync("dist");
    fs.writeFileSync("dist/system7.css", result.css);
    fs.writeFileSync("dist/system7.css.map", result.map.toString());
    console.log(`dist/system7.css written (v${version})`);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
