const yo = require("yo-yo")
require("./node_modules/bootstrap-css/lib/forms.css")

const Form = function(opts, _yield) {
  opts = opts || {}
  _yield = typeof _yield === "undefined" && "" || _yield

  return yo`
    <form id="${opts.id && opts.id || ""}" class="${(opts.bsClass && opts.bsClass + " "
                || ((opts.inline && 'form-inline')
                || (opts.horizontal && 'form-horizontal')
                || "form "))}">
      ${_yield}
    </form>
    `
}

module.exports = Form
