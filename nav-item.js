const yo = require('yo-yo')
const Children = require('./children')
require('./less/navs.less')

const NavItem = function (props) {
  props = props || {}

  var content = props.href && yo`<a href=${props.href} target=${props.target || ''}>${Children(arguments)}</a>` || Children(arguments)

  return yo`
    <li class="${(props.bsClass && props.bsClass + ' ' || '') +
    (props.active && 'active ' || '') +
    (props.disabled && 'disabled ' || '')}" data-eventKey=${props.eventKey} role=${props.role && props.role || 'presentation'} onclick=${props.onClick}>
      ${content}
    </li>
    `
}

module.exports = NavItem
