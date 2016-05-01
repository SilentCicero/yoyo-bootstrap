const yo = require("yo-yo")
const Children = require("./children")

const Option = function(props) {
  props = props || {}

  return yo`
    <option value="${(props.value && props.value + " ")}" ${props.selected && "selected"}>
      ${Children(arguments)}
    </option>
    `
}

module.exports = Option
