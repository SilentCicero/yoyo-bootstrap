const yo = require("yo-yo")
require("./node_modules/bootstrap-css/lib/button-groups.css")

const ButtonGroup = function(opts, _yield) {
  opts = opts || {}
  _yield = typeof _yield === "undefined" && "" || _yield

  return yo`
    <div role=${(opts.role && opts.role || 'group')}
          aria-label=${opts.ariaLabel && opts.ariaLabel || ''}
          class="${(opts.bsClass && opts.bsClass + " " || 'btn-group')
                + (opts.bsSize && "btn-group-" + opts.bsSize + " " || '')
                + (opts.justified && "btn-group-justified" + " " || '')
                + (opts.vertical && "btn-group-vertical" + " " || '')}">
      ${_yield}
    </div>
    `
}

module.exports = ButtonGroup
