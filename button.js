const yo = require("yo-yo")
const Children = require("./children")
require("./css/buttons.css")

const Button = function(props) {
  props = props || {}

  var elClass = (props.bsClass && props.bsClass + " " || 'btn')
      + (props.active && 'active' + " " || '')
      + (props.bsSize && 'btn-' + props.bsSize + " " || '')
      + (props.bsStyle && 'btn-' + props.bsStyle + " " || 'btn-default');
  var onClick = props.onClick && props.onClick || "";
  var elType = props.type && props.type || "button";
  var disabled = props.disabled && "disabled " || '';
  var target = props.target && props.target || '';

  if(props.href) {
    return yo`
      <a href="${props.href}" target="${target}" class="${elClass}" ${disabled}>
        ${Children(arguments)}
      </a>
      `
  } else {
    return yo`
      <button type=${elType} onclick=${onClick} class="${elClass}" ${disabled}>
        ${Children(arguments)}
      </button>
      `
  }
}

module.exports = Button
