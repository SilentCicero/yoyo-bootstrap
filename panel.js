const yo = require("yo-yo")
const Children = require("./children")
require("./less/panels.less")

const Panel = function(props) {
  props = props || {}

  var header = props.header && yo`<div class="panel-heading">${props.header}</div>` || '';
  var footer = props.footer && yo`<div class="panel-footer">${props.footer}</div>` || '';
  var panelRole = props.panelRole && props.panelRole || '';

  return yo`
    <div class="${(props.bsClass && props.bsClass + " " || 'panel ')
                + (props.bsStyle && "panel-" + props.bsStyle + " " || 'panel-default ')}" role="${panelRole}" onclick=${(props.onClick && props.onClick)}>
      ${header}
      <div class="panel-body">
        ${Children(arguments)}
      </div>
      ${footer}
    </div>
    `
}

module.exports = Panel
