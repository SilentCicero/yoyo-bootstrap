const yo = require("yo-yo")
const Children = require("./children")
require("./less/list-group-item.less")

const ListGroupItem = function(props) {
  props = props || {}

  var elClass = (props.bsClass && props.bsClass + " " || 'list-group-item ')
                + (props.active && 'active ' || '')
                + (props.bsStyle && 'list-group-item-' + props.bsStyle + " " || '')
                + (props.className && + props.className + " " || '')
                + (props.disabled && 'disabled ' || '');
  var content = (props.heading && yo`
      <h4 class="list-group-item-heading">${props.heading}</h4>
      <p class="list-group-item-text">${Children(arguments)}</p>
      ` || Children(arguments));

  if(props.href)
    return yo`
      <a href="${props.href}"
         target="${(props.target && props.target || '')}"
         class="${elClass}">
        ${content}
      </a>
      `
  else
    return yo`
      <div class="${elClass}">
        ${content}
      </div>
      `
}

module.exports = ListGroupItem
