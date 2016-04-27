const yo = require("yo-yo")
require("./node_modules/bootstrap-css/lib/component-animations.css")

const Fade = function(opts, _yield) {
  opts = opts || {}
  _yield = typeof _yield === "undefined" && "" || _yield

  var enter = (opts.onEnter && opts.in) && opts.onEnter()
  var exit = (opts.onExit && !opts.in) && opts.onExit()

  let el = yo`
    <div class=${(opts.bsClass && opts.bsClass + " " || 'fade ')
                + (opts.in && "in " || ' ')}>
      ${_yield}
    </div>
    `

  console.log(el)

  return el
}

module.exports = Fade
