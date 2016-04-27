const yo = require("yo-yo")
require("./node_modules/bootstrap-css/lib/panels.css")

const Panel = function(opts, _yield) {
  opts = opts || {}
  _yield = typeof _yield === "undefined" && "" || _yield

  var header = opts.header && yo`<div class="panel-heading">${opts.header}</div>` || '';
  var footer = opts.footer && yo`<div class="panel-footer">${opts.footer}</div>` || '';
  var panelRole = opts.panelRole && opts.panelRole || '';

  return yo`
    <div class="${(opts.bsClass && opts.bsClass + " " || 'panel ')
                + (opts.bsStyle && "panel-" + opts.bsStyle + " " || 'panel-default ')}" role="${panelRole}" onclick=${(opts.onClick && opts.onClick)}>
      ${header}
      <div class="panel-body">
        ${_yield}
      </div>
      ${footer}
    </div>
    `
}

module.exports = Panel
