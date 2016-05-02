const yo = require("yo-yo")
const Children = require("./children")
require("./less/progress-bars.less")

const ProgressBar = function(props) {
  props = props || {}

  const className = (props.bsClass && props.bsClass + " " || 'progress-bar ')
               + (props.active && "active" + " " || ' ')
               + (props.striped && "progress-bar-striped" + " " || ' ')
               + (props.bsStyle && "progress-bar-" + props.bsStyle + " " || ' ');

  return yo`
    <div class="progress">
      ${arguments[0] && Children(arguments) || yo`
        <div class="${className}" role="progressbar" aria-valuenow="${props.now && props.now || 0}" aria-valuemin="${props.min && props.min || 0}" aria-valuemax="${props.max && props.max || 100}" style="width: ${props.now && props.now || 0}%;">
          ${(props.label && props.label || '')}
        </div>
      `}
    </div>
    `
}

module.exports = ProgressBar
