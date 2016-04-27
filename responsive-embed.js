const yo = require("yo-yo")
require("./node_modules/bootstrap-css/lib/responsive-embed.css")

const ResponsiveEmbed = function(opts, _yield) {
  opts = opts || {}
  _yield = typeof _yield === "undefined" && "" || _yield

  return yo`
    <div class="${(opts.bsClass && opts.bsClass + " " || 'embed-responsive ')
                + (opts.a16by9 && "embed-responsive-16by9 " || ' ')
                + (opts.a4by3 && "embed-responsive-4by3 " || ' ')}">
      ${_yield}
    </div>
    `
}

module.exports = ResponsiveEmbed
