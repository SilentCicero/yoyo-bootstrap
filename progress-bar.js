const yo = require("yo-yo")
require("./node_modules/bootstrap-css/lib/progress-bars.css")

const ProgressBar = function(opts, _yield) {
  opts = opts || {}
  _yield = typeof _yield === "undefined" && "" || _yield

  const elClass = (opts.bsClass && opts.bsClass + " " || 'progress-bar ')
               + (opts.active && "active" + " " || ' ')
               + (opts.striped && "progress-bar-striped" + " " || ' ')
               + (opts.bsStyle && "progress-bar-" + opts.bsStyle + " " || ' ');

  return yo`
    <span class="">
      ${_yield}
    </span>
    <div class="progress">
      ${_yield && _yield || yo`
        <div class="${elClass}" role="progressbar" aria-valuenow="${opts.now && opts.now || 0}" aria-valuemin="${opts.min && opts.min || 0}" aria-valuemax="${opts.max && opts.max || 100}" style="width: ${opts.now && opts.now || 0}%;">
          ${(opts.label && opts.label || '')}
        </div>
      `}
    </div>
    `
}

module.exports = ProgressBar
