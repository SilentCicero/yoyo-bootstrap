const yo = require("yo-yo")
const Children = require("./children")
require("./css/list-group.css")

const ListGroup = function(props) {
  props = props || {}

  var elClass = props.bsClass && props.bsClass || 'list-group',
      id = props.id && props.id || '';

  if(props.componentClass == "ul")
    return yo`
      <ul id="${id}" class="${elClass}">
        ${Children(arguments)}
      </ul>
      `
  else
    return yo`
      <div id="${id}" class="${elClass}">
        ${Children(arguments)}
      </div>
      `
}

module.exports = ListGroup
