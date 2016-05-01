const yo = require("yo-yo")
const Children = require("./children")
require("./node_modules/bootstrap-css/lib/responsive-utilities.css")

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
