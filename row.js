const yo = require("yo-yo")
const Children = require("./children")
require("./css/grid.css")

const Row = function(props) {
  props = props || {}

  return yo`
    <div class="${(props.bsClass && props.bsClass + " " || 'row ')}">
      ${Children(arguments)}
    </div>
    `
}

module.exports = Row
