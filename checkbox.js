const yo = require("yo-yo")
const Children = require("./children")
require("./css/grid.css")

const Checkbox = function(props) {
  props = props || {}

  var content = Children(arguments) && yo`<label>${Children(arguments)}<label>` || "";
  var class = (props.bsClass && props.bsClass + " "
              || (props.inline && "checkbox-inline " || 'checkbox '))
              + (props.validationState && "has-" + props.validationState + " " || ' ');
  var checkbox = yo`<input disabled=${(props.disabled && 'true ' || 'false ')
                           + (props.checked && 'checked="checked" ' || ' ')
                           + (props.readOnly && "readOnly " || " ")} type="checkbox" />`

  if(props.inline)
    return yo`
      <label class="${class}">
        ${checkbox}
        ${content}
      </label>
      `
  else
    return yo`
      <div class="${class}">
        ${checkbox}
        ${content}
      </div>
      `
}

module.exports = Checkbox
