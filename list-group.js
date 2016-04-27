const yo = require("yo-yo")
require("./node_modules/bootstrap-css/lib/list-group.css")

const ListGroup = function(opts, _yield) {
  opts = opts || {}
  _yield = typeof _yield === "undefined" && "" || _yield

  var elClass = opts.bsClass && opts.bsClass || 'list-group',
      id = opts.id && opts.id || '';

  if(opts.componentClass == "ul")
    return yo`
      <ul id="${id}" class="${elClass}">
        ${_yield}
      </ul>
      `
  else
    return yo`
      <div id="${id}" class="${elClass}">
        ${_yield}
      </div>
      `
}

module.exports = ListGroup
