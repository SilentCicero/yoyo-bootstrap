const yo = require("yo-yo")
const Children = require("./children")
require("./node_modules/bootstrap-css/lib/labels.css")

const Label = function(props) {
  props = props || {}

  return yo`
    <span class="${(props.bsClass && props.bsClass + " " || 'label ')
                 + (props.bsStyle && "label-" + props.bsStyle + " " || 'label-default ')}">
      ${Children(arguments)}
    </span>
    `
}

module.exports = Label
