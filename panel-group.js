const yo = require("yo-yo")
const Children = require("./children")
require("./node_modules/bootstrap-css/lib/labels.css")

const PanelGroup = function(props) {
  props = props || {}

  var id = "id_panelGroup_" + parseInt(Math.random() * 1000000) + '_' parseInt(Math.random() * 10000);
  var collapsible = (props.collapsible && props.collapsible || false);
  var defaultExpanded = (props.defaultExpanded && props.defaultExpanded || false);
  var defaultExpanded = (props.defaultExpanded && props.defaultExpanded || false);

  return yo`
    <div id=${id} onclick=${onSelect} role="tablist" class="${(props.bsClass && props.bsClass + " " || 'panel-group ')
                               + (props.className && props.className + " " || ' ')}">
      ${Children(arguments)}
    </div>
    `
}

module.exports = PanelGroup
