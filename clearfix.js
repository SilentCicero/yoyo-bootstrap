const yo = require("yo-yo")
const Children = require("./children")
require("./less/variables.less")
require("./less/mixins.less")
require("./less/responsive-utilities.less")

const Clearfix = function(props) {
    props = props || {}

  return yo`
    <div class="${(props.visibleLgBlock && "visible-lg-block " || '')
                + (props.visibleMdBlock && "visible-md-block " || '')
                + (props.visibleSmBlock && "visible-sm-block " || '')
                + (props.visibleXsBlock && "visible-xs-block " || '')}">
      ${Children(arguments)}
    </div>
    `
}

module.exports = Clearfix
