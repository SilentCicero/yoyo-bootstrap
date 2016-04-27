const yo = require("yo-yo")
require("./node_modules/bootstrap-css/lib/forms.css")

const FormGroup = function(opts, _yield) {
  opts = opts || {}
  _yield = typeof _yield === "undefined" && "" || _yield

  return yo`
    <div id="${(opts.controlId && opts.controlId || '')}" class="${(opts.bsClass && opts.bsClass || 'form-group')
                + (opts.bsSize && "form-group-" + opts.bsSize + " " || '')
                + (opts.validationState && "has-" + opts.validationState + " " || '')}">
      ${_yield}
    </div>
    `
}

module.exports = FormGroup
