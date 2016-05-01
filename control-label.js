const yo = require("yo-yo")
const Children = require("./children")
require("./node_modules/bootstrap-css/lib/forms.css")

const ControlLabel = function(props) {
  props = props || {}

  return yo`
    <label class="${(props.bsClass && props.bsClass + " " || 'control-label ')}">
      ${Children(arguments)}
    </label>
    `
}

module.exports = ControlLabel
