const yo = require("yo-yo")
require("./node_modules/bootstrap-css/lib/forms.css")

const FormControl = function(opts, _yield) {
  opts = opts || {}
  _yield = typeof _yield === "undefined" && "" || _yield

  var class = (opts.bsClass && opts.bsClass + " " || 'form-control ')
  var type = (opts.type && opts.type || 'text')
  var placeholder = (opts.placeholder && opts.placeholder || '')
  var id = (opts.id && opts.id || '')
  var multiple = (opts.multiple && opts.multiple || '')
  var label = (opts.label && yo`<label class="control-label">${opts.label}</label>` || '')
  var componentClass = (opts.componentClass && opts.componentClass || "input")

  if(componentClass === "select") {
    return yo`
      ${label}
      <select id="${id}" class="${class}" placeholder="${placeholder}" ${multiple} />
        ${_yield}
      </select>
      `
  } else if(componentClass === "textarea") {
    return yo`
      ${label}
      <textarea id="${id}" class="${class}" placeholder="${placeholder}">
        ${_yield}
      </textarea>
      `
  } else {
    return yo`
      ${label}
      <input id="${id}" type="${type}" class="${class}" placeholder="${placeholder}" />
      `
  }
}

FormControl.Static = function(opts, _yield) {
  opts = opts || {}
  _yield = typeof _yield === "undefined" && "" || _yield

  return yo`
    <p class="${(opts.bsClass && opts.bsClass + " " || 'form-control-static ')}">
      ${_yield}
    </p>
    `
}

FormControl.Feedback = function(opts, _yield) {
  opts = opts || {}
  _yield = typeof _yield === "undefined" && "" || _yield

  var glyphicon = opts.glyph && opts.glyph
               || ((opts.validationState === "success" && "ok" || "")
                + (opts.validationState === "warning" && "warning-sign" || "")
                + (opts.validationState === "warning" && "warning-remove" || ""));

  return yo`
    <span class="${(opts.bsClass && opts.bsClass + " " || 'form-control-feedback glyphicon')
                 + (glyphicon && 'glyphicon-' + glyphicon + " " || "")}">
      ${_yield}
    </span>
    `
}

module.exports = FormControl
