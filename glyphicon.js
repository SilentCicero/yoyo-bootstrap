const yo = require("yo-yo")
require("./less/scaffolding.less")

const Glyphicon = function(props) {
  props = props || {}

  return yo`
    <span class="${(props.bsClass && props.bsClass + " " || 'glyphicon ')
                + (props.glyph && "glyphicon-" + props.glyph + ' ' || ' ')}">
    </span>
    `
}

module.exports = Glyphicon
