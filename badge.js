const yo = require("yo-yo")
const Children = require("./children")
require("./node_modules/bootstrap-css/lib/utilities.css")

const Badge = function(props) {
  props = props || {}

  return yo`
    <span class="${(props.bsClass && props.bsClass + " " || 'badge ')
                 + (props.pullRight && "pull-right " || " ")}">
      ${Children(arguments)}
    </span>
    `
}

module.exports = Badge
