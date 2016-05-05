const yo = require("yo-yo")
const Children = require("./children")
require("./less/buttons.less")

const Button = function(props) {
  props = props || {}

  var elClass = (props.bsClass && props.bsClass + " " || 'btn ')
      + (props.active && 'active' + " " || '')
      + (props.bsSize && 'btn-' + props.bsSize + " " || '')
      + (props.bsStyle && 'btn-' + props.bsStyle + " " || 'btn-default ')
  var onClick = props.onClick && props.onClick || ""
  var elType = props.type && props.type || "button"
  var target = props.target && props.target || ''
  var el = props.href
    && yo`<a href="${props.href}" target="${target}" class="${elClass}">${Children(arguments)}</a>`
    || yo`<button type=${elType} onclick=${onClick} class="${elClass}">${Children(arguments)}</button>`

  if(props.disabled) el.setAttribute("disabled", true)
  if(props.onBlur) el.addEventListener("blur", props.onBlur)

  return el
}

module.exports = Button
