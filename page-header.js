const yo = require("yo-yo")
const Children = require("./children")
require("./node_modules/bootstrap-css/lib/type.css")

const PageHeader = function(props) {
  props = props || {}

  return yo`
    <div class="${(props.bsClass && props.bsClass || 'page-header')}">
      ${Children(arguments)}
    </div>
    `
}

module.exports = PageHeader
