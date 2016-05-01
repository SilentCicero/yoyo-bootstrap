const yo = require("yo-yo")
const Children = require("./children")
require("./node_modules/bootstrap-css/lib/grid.css")

const HelpBlock = function(props) {
  props = props || {}

  return yo`
    <div class="${(props.bsClass && props.bsClass + " " || 'help-block ')}">
      ${Children(arguments)}
    </div>
    `
}

module.exports = HelpBlock
