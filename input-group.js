const yo = require("yo-yo")
require("./node_modules/bootstrap-css/lib/grid.css")

const InputGroup = function(opts, _yield) {
  opts = opts || {}
  _yield = typeof _yield === "undefined" && "" || _yield

  return yo`
    <span class="${(opts.bsClass && opts.bsClass + " " || 'input-group ')}">
      ${_yield}
    </span>
    `
}

InputGroup.Addon = function(opts, _yield) {
  opts = opts || {}
  _yield = typeof _yield === "undefined" && "" || _yield

  return yo`
    <span class="${(opts.bsClass && opts.bsClass + " " || 'input-group-addon ')}">
      ${_yield}
    </span>
    `
}

InputGroup.Button = function(opts, _yield) {
  opts = opts || {}
  _yield = typeof _yield === "undefined" && "" || _yield

  return yo`
    <span class="${(opts.bsClass && opts.bsClass + " " || 'input-group-btn ')}">
      ${_yield}
    </span>
    `
}

module.exports = InputGroup
