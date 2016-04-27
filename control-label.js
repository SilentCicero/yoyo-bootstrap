const yo = require("yo-yo")
require("./node_modules/bootstrap-css/lib/forms.css")

const ControlLabel = function(opts, _yield) {
  opts = opts || {}
  _yield = typeof _yield === "undefined" && "" || _yield

  return yo`
    <label class="${(opts.bsClass && opts.bsClass + " " || 'control-label ')}">
      ${_yield}
    </label>
    `
}

module.exports = ControlLabel
