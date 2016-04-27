const yo = require("yo-yo")
require("./node_modules/bootstrap-css/lib/button-groups.css")

const ButtonToolbar = function(opts, _yield) {
  opts = opts || {}
  _yield = typeof _yield === "undefined" && "" || _yield

  return yo`
    <div class="${(opts.bsClass && opts.bsClass || 'btn-toolbar')}">
      ${_yield}
    </div>
    `
}

module.exports = ButtonToolbar
