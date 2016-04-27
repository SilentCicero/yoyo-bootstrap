const yo = require("yo-yo")
require("./node_modules/bootstrap-css/lib/buttons.css")

const Button = function(opts, _yield) {
  opts = opts || {}
  _yield = typeof _yield === "undefined" && "" || _yield

  var elClass = (opts.bsClass && opts.bsClass + " " || 'btn')
      + (opts.active && 'active' + " " || '')
      + (opts.bsSize && 'btn-' + opts.bsSize + " " || '')
      + (opts.bsStyle && 'btn-' + opts.bsStyle + " " || 'btn-default');
  var onClick = opts.onClick && opts.onClick || "";
  var elType = opts.type && opts.type || "button";
  var disabled = opts.disabled && "disabled " || '';
  var target = opts.target && opts.target || '';

  if(opts.href) {
    return yo`
      <a href="${opts.href}" target="${target}" class="${elClass}" ${disabled}>
        ${_yield}
      </a>
      `
  } else {
    return yo`
      <button type=${elType} onclick=${onClick} class="${elClass}" ${disabled}>
        ${_yield}
      </button>
      `
  }
}

module.exports = Button
