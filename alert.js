const yo = require("yo-yo")
require("./node_modules/bootstrap-css/lib/labels.css")

const Alert = function(opts, _yield) {
  opts = opts || {}
  _yield = typeof _yield === "undefined" && "" || _yield

  return yo`
    <div class="${(opts.bsClass && opts.bsClass + " " || 'alert ')
                 + (opts.bsStyle && "alert-" + opts.bsStyle + " " || 'alert-info ')}">
      <button type="button" onclick=${opts.onDismiss && opts.onDismiss} class="close" aria-hidden="true" tabindex="-1">
        <span>×</span>
      </button>
      ${_yield}
    </div>
    `
}

module.exports = Alert
