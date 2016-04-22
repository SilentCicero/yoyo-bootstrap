const yo = require("yo-yo");
require("../../../node_modules/bootstrap-css/lib/component-animations.css")

const Collapse = function(opts, _yield) {
  opts = typeof opts === "undefined" && {} || opts;
  _yield = typeof _yield === "undefined" && "" || _yield;

  var enter = (opts.onEnter && opts.in) && opts.onEnter();
  var exit = (opts.onExit && !opts.in) && opts.onExit();

  let el = yo`
    <div class=${(opts.bsClass && opts.bsClass + " " || 'collapse ')
                + (opts.in && "in " || 'collapsing ')}>
      ${_yield}
    </div>
    `

  return el;
}

module.exports = Collapse;
