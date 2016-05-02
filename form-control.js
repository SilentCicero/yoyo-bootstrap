const yo = require("yo-yo")
const Children = require("./children")
require("./less/variables.less")
require("./less/mixins.less")
require("./less/forms.less")

const FormControl = function(props) {
  props = props || {}

  var className = (props.bsClass && props.bsClass + " " || 'form-control ')
  var type = (props.type && props.type || 'text')
  var placeholder = (props.placeholder && props.placeholder || '')
  var id = (props.id && props.id || '')
  var multiple = (props.multiple && "true" || 'false')
  var disabled = (props.disabled && "true" || 'false')
  var label = (props.label && yo`<label class="control-label">${props.label}</label>` || '')
  var componentClass = (props.componentClass && props.componentClass || "input")

  if(componentClass === "select") {
    return yo`
      <span>
        ${label}
        <select id="${id}" class="${className}" disabled=${disabled} placeholder="${placeholder}" multiple=${multiple} />
          ${Children(arguments)}
        </select>
      </span>
      `
  } else if(componentClass === "textarea") {
    return yo`
      <span>
        ${label}
        <textarea id="${id}" class="${className}" disabled=${disabled} placeholder="${placeholder}">
          ${Children(arguments)}
        </textarea>
      </span>
      `
  } else {
    return yo`
      <span>
        ${label}
        <input id="${id}" type="${type}" disabled=${disabled} class="${className}" placeholder="${placeholder}" />
      </span>
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
