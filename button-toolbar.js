const yo = require("yo-yo")
const Children = require("./children")
require("./node_modules/bootstrap-css/lib/button-groups.css")

const ButtonToolbar = function(props) {
  props = props || {}

  return yo`
    <div class="${(props.bsClass && props.bsClass || 'btn-toolbar')}">
      ${Children(arguments)}
    </div>
    `
}

module.exports = ButtonToolbar
