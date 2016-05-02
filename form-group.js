const yo = require("yo-yo")
const Children = require("./children")
require("./less/forms.less")

const FormGroup = function(props) {
  props = props || {}

  return yo`
    <div id="${(props.controlId && props.controlId || '')}" class="${(props.bsClass && props.bsClass || 'form-group ')
                + (props.bsSize && "form-group-" + props.bsSize + " " || '')
                + (props.validationState && "has-" + props.validationState + " " || '')}">
      ${Children(arguments)}
    </div>
    `
}

module.exports = FormGroup
