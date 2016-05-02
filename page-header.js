const yo = require("yo-yo")
const Children = require("./children")
require("./less/variables.less")
require("./less/mixins.less")
require("./less/type.less")

const PageHeader = function(props) {
  props = props || {}

  return yo`
    <div class="${(props.bsClass && props.bsClass || 'page-header ')}">
      ${Children(arguments)}
    </div>
    `
}

module.exports = PageHeader
