const yo = require("yo-yo")
const Children = require("./children")
require("./less/breadcrumbs.less")

const Breadcrumb = function(props) {
  props = props || {}

  return yo`
    <ol class="${(props.bsClass && props.bsClass + " " || 'breadcrumb ')}">
      ${Children(arguments)}
    </ol>
    `
}

Breadcrumb.Item = function(props) {
  props = props || {}

  var content = props.href
              && yo`<a id=${props.linkId || ""} href=${props.href} target=${props.target || ""} title=${props.title || ""}>${Children(arguments)}</a>`
              || Children(arguments)

  return yo`
    <li id=${props.id || ""} class="${(props.bsClass && props.bsClass + " " || ' ')
               + (props.active && "active " || ' ')}">
      ${Children(arguments)}
    </li>
    `
}

module.exports = Breadcrumb
