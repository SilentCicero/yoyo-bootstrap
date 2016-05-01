const yo = require("yo-yo")
const Children = require("./children")
require("./css/button-groups.css")

const ButtonGroup = function(props) {
  props = props || {}

  return yo`
    <div role=${(props.role && props.role || 'group')}
          aria-label=${props.ariaLabel && props.ariaLabel || ''}
          class="${(props.bsClass && props.bsClass + " " || 'btn-group')
                + (props.bsSize && "btn-group-" + props.bsSize + " " || '')
                + (props.justified && "btn-group-justified" + " " || '')
                + (props.vertical && "btn-group-vertical" + " " || '')}">
      ${Children(arguments)}
    </div>
    `
}

module.exports = ButtonGroup
