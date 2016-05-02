const yo = require("yo-yo")
const Children = require("./children")
require("./less/forms.less")

const Form = function(props) {
  props = props || {}

  return yo`
    <form id="${props.id && props.id || ""}" class="${(props.bsClass && props.bsClass + " "
                || ((props.inline && 'form-inline')
                || (props.horizontal && 'form-horizontal')
                || "form "))}">
      ${Children(arguments)}
    </form>
    `
}

module.exports = Form
