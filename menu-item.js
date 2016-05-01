const yo = require("yo-yo")
const Children = require("./children")
require("./node_modules/bootstrap-css/lib/dropdowns.css")

const MenuItem = function(props) {
  props = props || {}

  return yo`
    <li class=${(props.header && "dropdown-header " || " ")
              + (props.divider && "divider " || "")
              + (props.disabled && "disabled " || "")
              + (props.active && "active " || "")}
        role="presentation">
      ${props.href && yo`
        <a href="${props.href}" target=${props.target || ""} onclick=${(props.onClick || function(){})} tabindex="-1">
          ${Children(arguments)}
        </a>` || _yield}
    </li>
    `
}

module.exports = MenuItem
