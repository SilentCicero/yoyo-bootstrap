const yo = require('yo-yo')
require('./less/pagination.less')

const Pagination = function (props) {
  props = props || {}
  props.activePage = props.activePage || 1
  props.onSelect = props.onSelect || function () {}
  props.items = props.items || 1
  props.prev = props.prev && '‹' || false
  props.next = props.next && '›' || false
  props.first = props.first && '«' || false
  props.last = props.last && '»' || false
  props.boundaryLinks = props.boundaryLinks || false
  props.children = []

  for (var i = 1; i <= props.items; i++) props.children.push(i)

  function onClick (event) {
    if (!event.target.dataset) return
    if (event.target.dataset.item) props.onSelect(event.target.dataset.item)
  }

  function renderItem (dataItem, content, active) {
    return yo`<li><a role="button" onclick=${onClick} data-item=${dataItem} class=${active && dataItem === props.activePage && 'active' || ''}>${content}</a></li>`
  }

  return yo`
    <div class="${(props.bsClass && props.bsClass + ' ' || 'pagination ') +
                  (props.bsSize && 'pagination-' + props.bsSize + ' ' || ' ')}">
      ${props.boundaryLinks && props.first && renderItem(0, props.first) || ''}
      ${props.prev && renderItem(Math.abs(props.activePage - 1), props.prev) || ''}
      ${props.children.map(function (item) {
        return renderItem(item, item, true)
      })}
      ${props.next && renderItem(props.next, Math.abs(props.activePage + 1)) || ''}
      ${props.boundaryLinks && props.last && renderItem(props.last, props.items) || ''}
    </div>
    `
}

module.exports = Pagination
