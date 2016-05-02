const yo = require("yo-yo")
const Children = require("./children")
require("./less/variables.less")
require("./less/mixins.less")
require("./less/forms.less")

const Radio = function(props) {
  props = props || {}

  var content = Children(arguments) && yo`<label>${Children(arguments)}<label>` || "";
  var className = (props.bsClass && props.bsClass + " "
              || (props.inline && "checkbox-inline " || 'checkbox '))
              + (props.validationState && "has-" + props.validationState + " " || ' ');
  var checkbox = yo`<input type="radio" />`

  if(props.disabled) checkbox.setAttribute("disabled", true)
  if(props.checked) checkbox.setAttribute("checked", true)
  if(props.readOnly) checkbox.setAttribute("readOnly", true)

  return props.inline && yo`<label class="${className}">${checkbox} ${content}</label>`
                     || yo`<div class="${className}">${checkbox} ${content}</div>`
}

module.exports = Radio
