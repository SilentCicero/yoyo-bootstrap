const yo = require("yo-yo");
require("./node_modules/bootstrap-css/lib/wells.css")

const Well = function(opts, _yield) {
  opts = typeof opts === "undefined" && {} || opts;
  _yield = typeof _yield === "undefined" && "" || _yield;

  return yo`
    <div class="${(opts.bsClass && opts.bsClass + " " || 'well ')
                + (opts.bsSize && "well-" + opts.bsSize + " " || '')}">
      ${_yield}
    </div>
    `
}

module.exports = Well;
