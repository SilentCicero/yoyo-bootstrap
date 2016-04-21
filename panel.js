const yo = require("yo-yo");
require("./node_modules/bootstrap-css/lib/panels.css")

const Panel = function(opts, _yield) {
  opts = typeof opts === "undefined" && {} || opts;
  _yield = typeof _yield === "undefined" && "" || _yield;

  var header = opts.header && yo`<div class="panel-heading">${opts.header}</div>` || '';
  var footer = opts.footer && yo`<div class="panel-footer">${opts.footer}</div>` || '';

  return yo`
    <div onclick=${(opts.onClick && opts.onClick)} class="${(opts.bsClass && opts.bsClass + " " || 'panel ')
                                                          + (opts.bsStyle && "panel-" + opts.bsStyle + " " || 'panel-default ')}">
      ${header}
      <div class="panel-body">
        ${_yield}
      </div>
      ${footer}
    </div>
    `
}

module.exports = Panel;
