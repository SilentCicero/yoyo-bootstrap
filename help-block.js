const yo = require("yo-yo");
require("./node_modules/bootstrap-css/lib/grid.css")

const HelpBlock = function(opts, _yield) {
  opts = typeof opts === "undefined" && {} || opts;
  _yield = typeof _yield === "undefined" && "" || _yield;

  return yo`
    <div class="${(opts.bsClass && opts.bsClass + " " || 'help-block ')}">
      ${_yield}
    </div>
    `
}

module.exports = HelpBlock;
