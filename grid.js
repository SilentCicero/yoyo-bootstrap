const yo = require("yo-yo");
require("./node_modules/bootstrap-css/lib/grid.css")

const Grid = function(opts, _yield) {
  opts = typeof opts === "undefined" && {} || opts;
  _yield = typeof _yield === "undefined" && "" || _yield;

  return yo`
    <div class="${(opts.bsClass && opts.bsClass || 'container')
                + (opts.fluid && opts.fluid || 'container-fluid')}">
      ${_yield}
    </div>
    `
}

module.exports = Grid;
