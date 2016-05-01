const yo = require("yo-yo")
const Children = require("./children")
require("./node_modules/bootstrap-css/lib/component-animations.css")

const Fade = function(props) {
  props = props || {}

  var enter = (props.onEnter && props.in) && props.onEnter()
  var exit = (props.onExit && !props.in) && props.onExit()

  let el = yo`
    <div class=${(props.bsClass && props.bsClass + " " || 'fade ')
                + (props.in && "in " || ' ')}>
      ${Children(arguments)}
    </div>
    `

  return el
}

module.exports = Fade
