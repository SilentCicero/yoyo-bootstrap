const yo = require("yo-yo")
const Children = require("./children")
require("./less/forms.less")

const ControlLabel = function(props) {
  props = props || {}

  return yo`
    <label class="${(props.bsClass && props.bsClass + " " || 'control-label ')}">
      ${Children(arguments)}
    </label>
    `
}

module.exports = ControlLabel
