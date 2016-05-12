const yo = require('yo-yo')
const Children = require('./children')

const Option = function (props) {
  props = props || {}

  var el = yo`
    <option value="${(props.value && props.value + ' ')}">
      ${Children(arguments)}
    </option>
    `
  if (props.selected) el.setAttribute('selected', true)

  return el
}

module.exports = Option
