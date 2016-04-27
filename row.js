const yo = require("yo-yo")
require("./node_modules/bootstrap-css/lib/grid.css")

const Row = function(opts, _yield) {
  opts = opts || {}
  _yield = typeof _yield === "undefined" && "" || _yield

  return yo`
    <div class="${(opts.bsClass && opts.bsClass + " " || 'row ')}">
      ${_yield}
    </div>
    `
}

module.exports = Row
