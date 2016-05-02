const yo = require("yo-yo")
const Children = require("./children")
require("./less/variables.less")
require("./less/mixins.less")
require("./less/grid.less")

const Row = function(props) {
  props = props || {}

  return yo`
    <div class="${(props.bsClass && props.bsClass + " " || 'row ')}">
      ${Children(arguments)}
    </div>
    `
}

module.exports = Row
