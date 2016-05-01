const yo = require("yo-yo")
require("./css/scaffolding.css")

const Glyphicon = function(props) {
  props = props || {}

  return yo`
    <span class="${(props.bsClass && props.bsClass + " " || 'glyphicon ')
                + (props.glyph && "glyphicon-" + props.glyph + ' ' || ' ')}">
    </span>
    `
}

module.exports = Glyphicon
