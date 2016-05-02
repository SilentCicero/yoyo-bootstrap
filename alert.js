const yo = require("yo-yo")
const Children = require("./children")
require("./less/labels.less")

const Alert = function(props) {
  props = props || {}

  return yo`
    <div class="${(props.bsClass && props.bsClass + " " || 'alert ')
                 + (props.bsStyle && "alert-" + props.bsStyle + " " || 'alert-info ')}">
      <button type="button" onclick=${props.onDismiss && props.onDismiss} class="close" aria-hidden="true" tabindex="-1">
        <span>×</span>
      </button>
      ${Children(arguments)}
    </div>
    `
}

module.exports = Alert
