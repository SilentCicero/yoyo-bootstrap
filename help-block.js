const yo = require("yo-yo")
const Children = require("./children")
require("./less/variables.less")
require("./less/mixins.less")
require("./less/grid.less")

const HelpBlock = function(props) {
  props = props || {}

  return yo`
    <div class="${(props.bsClass && props.bsClass + " " || 'help-block ')}">
      ${Children(arguments)}
    </div>
    `
}

module.exports = HelpBlock
