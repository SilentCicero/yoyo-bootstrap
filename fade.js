const yo = require("yo-yo")
const Children = require("./children")
require("./less/component-animations.less")

const Fade = function(props) {
  props = props || {}

  var enter = (props.onEnter && props.in) && props.onEnter()
  var exit = (props.onExit && !props.in) && props.onExit()

  return yo`
    <div class=${(props.bsClass && props.bsClass + " " || 'fade ')
                + (props.in && "in " || ' ')}>
      ${Children(arguments)}
    </div>
    `
}

module.exports = Fade
