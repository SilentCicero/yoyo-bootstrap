const yo = require('yo-yo')
const Children = require('./children')
require('./less/grid.less')

const Checkbox = function (props) {
  props = props || {}

  var content = arguments[0] && yo`<label>${Children(arguments)}<label>` || ''
  var className = (props.bsClass && props.bsClass + ' ' || (props.inline && 'checkbox-inline ' || 'checkbox ')) +
    (props.validationState && 'has-' + props.validationState + ' ' || ' ')
  var checkbox = yo`<input type="checkbox" />`

  if (props.disabled) checkbox.setAttribute('disabled', true)

  if (props.checked) checkbox.setAttribute('checked', 'checked')

  if (props.readOnly) checkbox.setAttribute('readOnly', 'readOnly')

  return props.inline && yo`
    <label class="${className}">
      ${checkbox}
      ${content}
    </label>
    ` || yo`
      <div class="${className}">
        ${checkbox}
        ${content}
      </div>
      `
}

module.exports = Checkbox
