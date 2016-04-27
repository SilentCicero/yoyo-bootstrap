const yo = require("yo-yo")
require("./node_modules/bootstrap-css/lib/labels.css")

const PanelGroup = function(opts, _yield) {
  opts = opts || {}
  _yield = typeof _yield === "undefined" && "" || _yield

  var id = "id_panelGroup_" + parseInt(Math.random() * 1000000) + '_' parseInt(Math.random() * 10000);
  var collapsible = (opts.collapsible && opts.collapsible || false);
  var defaultExpanded = (opts.defaultExpanded && opts.defaultExpanded || false);
  var defaultExpanded = (opts.defaultExpanded && opts.defaultExpanded || false);

  return yo`
    <div id=${id} onclick=${onSelect} role="tablist" class="${(opts.bsClass && opts.bsClass + " " || 'panel-group ')
                               + (opts.className && opts.className + " " || ' ')}">
      ${_yield}
    </div>
    `
}

module.exports = PanelGroup
