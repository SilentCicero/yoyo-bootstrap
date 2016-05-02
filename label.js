const yo = require("yo-yo")
const Children = require("./children")
require("./less/variables.less")
require("./less/mixins.less")
require("./less/labels.less")

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
