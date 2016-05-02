const yo = require("yo-yo")
const Children = require("./children")
require("./less/variables.less")
require("./less/mixins.less")
require("./less/wells.less")

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
