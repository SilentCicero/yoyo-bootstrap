const yo = require("yo-yo")
require("./node_modules/bootstrap-css/lib/scaffolding.css")

const Glyphicon = function(props) {
  props = props || {}

  return yo`
    <span class="${(props.bsClass && props.bsClass + " " || 'glyphicon ')
                + (props.glyph && "glyphicon-" + props.glyph + ' ' || ' ')}">
    </span>
    `
}

module.exports = Glyphicon
