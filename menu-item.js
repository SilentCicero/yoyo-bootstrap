const yo = require("yo-yo")
require("./node_modules/bootstrap-css/lib/dropdowns.css")

const MenuItem = function(opts, _yield) {
  opts = opts || {}
  _yield = typeof _yield !== "undefined" && _yield || ""

  return yo`
    <li class=${(opts.header && "dropdown-header " || " ")
              + (opts.divider && "divider " || "")
              + (opts.disabled && "disabled " || "")
              + (opts.active && "active " || "")}
        role="presentation">
      ${opts.href && yo`
        <a href="${opts.href}" target=${opts.target || ""} onclick=${(opts.onClick || function(){})} tabindex="-1">
          ${_yield}
        </a>` || _yield}
    </li>
    `
}

module.exports = MenuItem
