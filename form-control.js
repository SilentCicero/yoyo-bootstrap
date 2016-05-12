const yo = require('yo-yo')
const Children = require('./children')
require('./less/forms.less')

const FormControl = function (props) {
  props = props || {}

  var className = (props.bsClass && props.bsClass + ' ' || 'form-control '),
    type = (props.type && props.type || 'text'),
    placeholder = (props.placeholder && props.placeholder || ''),
    id = (props.id && props.id || ''), el,
    label = (props.label && yo`<label class="control-label">${props.label}</label>` || ''),
    componentClass = (props.componentClass && props.componentClass || 'input')

  if (componentClass === 'select') {
    el = yo`<select id="${id}" class="${className}" placeholder="${placeholder}" />
          ${Children(arguments)}
        </select>`
  } else if (componentClass === 'textarea') {
    el = yo`<textarea id="${id}" class="${className}" placeholder="${placeholder}">${props.value || ''}</textarea>`
  } else {
    el = yo`<input id="${id}" type="${type}" class="${className}" value=${props.value || ''} placeholder="${placeholder}" />`
  }

  if (props.disabled) el.setAttribute('disabled', true)
  if (props.multiple) el.setAttribute('multiple', true)
  if (props.onBlur) el.addEventListener('blur', props.onBlur)
  if (props.onFocus) el.addEventListener('focus', props.onFocus)
  if (props.onClick) el.addEventListener('click', props.onClick)
  if (props.onChange) el.addEventListener('change', props.onChange)

  return yo`<span> ${label} ${el} </span>`
}

FormControl.Static = function (props, _yield) {
  props = props || {}
  _yield = typeof _yield === 'undefined' && '' || _yield

  return yo`
    <p class="${(props.bsClass && props.bsClass + ' ' || 'form-control-static ')}">
      ${Children(arguments)}
    </p>
    `
}

FormControl.Feedback = function (props, _yield) {
  props = props || {}
  _yield = typeof _yield === 'undefined' && '' || _yield

  var glyphicon = props.glyph &&
                  props.glyph ||
                  ((props.validationState === 'success' && 'ok' || '') +
                  (props.validationState === 'warning' && 'warning-sign' || '') +
                  (props.validationState === 'warning' && 'warning-remove' || ''))

  return yo`
    <span class="${(props.bsClass && props.bsClass + ' ' || 'form-control-feedback glyphicon') +
                   (glyphicon && 'glyphicon-' + glyphicon + ' ' || '')}">
      ${Children(arguments)}
    </span>
    `
}

module.exports = FormControl
