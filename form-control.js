const yo = require("yo-yo")
const Children = require("./children")
require("./css/forms.css")

const FormControl = function(props) {
  props = props || {}

  var class = (props.bsClass && props.bsClass + " " || 'form-control ')
  var type = (props.type && props.type || 'text')
  var placeholder = (props.placeholder && props.placeholder || '')
  var id = (props.id && props.id || '')
  var multiple = (props.multiple && props.multiple || '')
  var label = (props.label && yo`<label class="control-label">${props.label}</label>` || '')
  var componentClass = (props.componentClass && props.componentClass || "input")

  if(componentClass === "select") {
    return yo`
      ${label}
      <select id="${id}" class="${class}" placeholder="${placeholder}" ${multiple} />
        ${Children(arguments)}
      </select>
      `
  } else if(componentClass === "textarea") {
    return yo`
      ${label}
      <textarea id="${id}" class="${class}" placeholder="${placeholder}">
        ${Children(arguments)}
      </textarea>
      `
  } else {
    return yo`
      ${label}
      <input id="${id}" type="${type}" class="${class}" placeholder="${placeholder}" />
      `
  }
}

FormControl.Static = function(props, _yield) {
  props = props || {}
  _yield = typeof _yield === "undefined" && "" || _yield

  return yo`
    <p class="${(props.bsClass && props.bsClass + " " || 'form-control-static ')}">
      ${Children(arguments)}
    </p>
    `
}

FormControl.Feedback = function(props, _yield) {
  props = props || {}
  _yield = typeof _yield === "undefined" && "" || _yield

  var glyphicon = props.glyph && props.glyph
               || ((props.validationState === "success" && "ok" || "")
                + (props.validationState === "warning" && "warning-sign" || "")
                + (props.validationState === "warning" && "warning-remove" || ""));

  return yo`
    <span class="${(props.bsClass && props.bsClass + " " || 'form-control-feedback glyphicon')
                 + (glyphicon && 'glyphicon-' + glyphicon + " " || "")}">
      ${Children(arguments)}
    </span>
    `
}

module.exports = FormControl
