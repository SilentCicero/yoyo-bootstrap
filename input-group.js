const yo = require('yo-yo')
const Children = require('./children')
require('./less/input-groups.less')

const InputGroup = function (props) {
  props = props || {}

  return yo`
    <span class="${(props.bsClass && props.bsClass + ' ' || 'input-group ') +
    (props.className || '')}">
      ${Children(arguments)}
    </span>
    `
}

InputGroup.Addon = function (props, _yield) {
  props = props || {}

  return yo`
    <span class="${(props.bsClass && props.bsClass + ' ' || 'input-group-addon ') +
    (props.className || '')}">
      ${Children(arguments)}
    </span>
    `
}

InputGroup.Button = function (props, _yield) {
  props = props || {}

  return yo`
    <span class="${(props.bsClass && props.bsClass + ' ' || 'input-group-btn ') +
    (props.className || '')}">
      ${Children(arguments)}
    </span>
    `
}

module.exports = InputGroup
