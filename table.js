const yo = require("yo-yo")
require("./node_modules/bootstrap-css/lib/tables.css")

const Table = function(opts, _yield) {
  opts = opts || {}
  _yield = typeof _yield === "undefined" && "" || _yield

  var elClass = (opts.bsClass && opts.bsClass + " " || 'table ')
              + (opts.striped && "table-striped " || '')
              + (opts.bordered && "table-bordered " || '')
              + (opts.condensed && "table-condensed " || '')
              + (opts.hover && "table-hover " || '');

  return yo`
    <table class="${elClass}">
      ${_yield}
    </table>
    `
}

module.exports = Table
