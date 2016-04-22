const yo = require("yo-yo");
require("./node_modules/bootstrap-css/lib/scaffolding.css")

const Glyphicon = function(opts) {
  opts = typeof opts === "undefined" && {} || opts;
  _yield = typeof _yield === "undefined" && "" || _yield;

  return yo`
    <span class="${(opts.bsClass && opts.bsClass + " " || 'glyphicon ')
                + (opts.glyph && "glyphicon-" + opts.glyph + ' ' || ' ')}">
    </span>
    `
}

module.exports = Glyphicon;
