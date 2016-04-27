const yo = require("yo-yo")
require("./node_modules/bootstrap-css/lib/list-group-item.css")

const ListGroupItem = function(opts, _yield) {
  opts = opts || {}
  _yield = typeof _yield === "undefined" && "" || _yield

  var elClass = (opts.bsClass && opts.bsClass + " " || 'list-group-item ')
                + (opts.active && 'active ' || '')
                + (opts.bsStyle && 'list-group-item-' + opts.bsStyle + " " || '')
                + (opts.className && + opts.className + " " || '')
                + (opts.disabled && 'disabled ' || '');
  var content = (opts.heading && yo`
      <h4 class="list-group-item-heading">${opts.heading}</h4>
      <p class="list-group-item-text">${_yield}</p>
      ` || _yield);

  if(opts.href)
    return yo`
      <a href="${opts.href}"
         target="${(opts.target && opts.target || '')}"
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
