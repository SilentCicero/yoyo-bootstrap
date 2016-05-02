const yo = require("yo-yo")
const Children = require("./children")
require("./css/grid.css")

const Radio = function(props) {
  props = props || {}

  var content = Children(arguments) && yo`<label>${Children(arguments)}<label>` || "";
  var className = (props.bsClass && props.bsClass + " "
              || (props.inline && "checkbox-inline " || 'checkbox '))
              + (props.validationState && "has-" + props.validationState + " " || ' ');
  var checkbox = yo`<input disabled=${(props.disabled && 'true' || 'false')
                           + (props.checked && 'checked="checked" ' || ' ')
                           + (props.readOnly && "readOnly " || " ")} type="radio" />`

  return props.inline && yo`<label class="${className}">${checkbox} ${content}</label>`
                     || yo`<div class="${className}">${checkbox} ${content}</div>`
}

module.exports = Radio
