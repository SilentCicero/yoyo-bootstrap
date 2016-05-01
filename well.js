const yo = require("yo-yo")
const Children = require("./children")
require("./node_modules/bootstrap-css/lib/wells.css")

const Well = function(props) {
  props = props || {}

  return yo`
    <div class="${(props.bsClass && props.bsClass + " " || 'well ')
                + (props.bsSize && "well-" + props.bsSize + " " || '')}">
      ${Children(arguments)}
    </div>
    `
}

module.exports = Well
