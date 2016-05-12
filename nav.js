const yo = require('yo-yo')
const Children = require('./children')
const walk = require('./walk')
const addClass = require('dom101/add-class')
const removeClass = require('dom101/remove-class')
require('./less/navs.less')

const Nav = function (props) {
  props = props || {}
  var el
  el = yo`
    <ul onclick=${props.onSelect} class="${(props.bsClass && props.bsClass + ' ' || 'nav ') +
    (props.bsStyle && 'nav-' + props.bsStyle + ' ' || ' ') +
    (props.stacked && 'nav-stacked ' || ' ') +
    (props.justified && 'nav-justified ' || ' ') +
    (props.pullRight && 'pull-right ' || ' ') +
    (props.pullLeft && 'pull-left ' || ' ')}">
      ${Children(arguments)}
    </ul>
    `

  if (props.activeKey) {
    walk(el, function (node) {
      if (!node.dataset) return
      if (!node.dataset.eventKey) return
      if (node.dataset.eventKey === props.activeKey) {
        addClass(node, 'active')
      } else {
        removeClass(node, 'active')
      }
    })
  }

  return el
}

module.exports = Nav
