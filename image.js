const yo = require("yo-yo")
require("./node_modules/bootstrap-css/lib/scaffolding.css")

const Image = function(opts) {
  opts = opts || {}
  _yield = typeof _yield === "undefined" && "" || _yield

  return yo`
    <div class="${(opts.bsClass && opts.bsClass + " " || ' ')
                + (opts.rounded && "img-rounded " || ' ')
                + (opts.circle && "img-circle " || ' ')
                + (opts.responsive && "img-responsive " || ' ')
                + (opts.thumbnail && "img-thumbnail " || ' ')}">
    `
}

module.exports = Image
