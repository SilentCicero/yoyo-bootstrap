const yo = require("yo-yo")
const Children = require("./children")
require("./node_modules/bootstrap-css/lib/progress-bars.css")

const ProgressBar = function(props) {
  props = props || {}

  const elClass = (props.bsClass && props.bsClass + " " || 'progress-bar ')
               + (props.active && "active" + " " || ' ')
               + (props.striped && "progress-bar-striped" + " " || ' ')
               + (props.bsStyle && "progress-bar-" + props.bsStyle + " " || ' ');

  return yo`
    <span class="">
      ${Children(arguments)}
    </span>
    <div class="progress">
      ${Children(arguments) && Children(arguments) || yo`
        <div class="${elClass}" role="progressbar" aria-valuenow="${props.now && props.now || 0}" aria-valuemin="${props.min && props.min || 0}" aria-valuemax="${props.max && props.max || 100}" style="width: ${props.now && props.now || 0}%;">
          ${(props.label && props.label || '')}
        </div>
      `}
    </div>
    `
}

module.exports = ProgressBar
