const yo = require("yo-yo");
require("./node_modules/bootstrap-css/lib/utilities.css")

const Badge = function(opts, _yield) {
  opts = typeof opts === "undefined" && {} || opts;
  _yield = typeof _yield === "undefined" && "" || _yield;

  return yo`
    <span class="${(opts.bsClass && opts.bsClass + " " || 'badge ')
                 + (opts.pullRight && "pull-right " || " ")}">
      ${_yield}
    </span>
    `
}

module.exports = Badge;
