const yo = require("yo-yo");
require("./node_modules/bootstrap-css/lib/type.css")

const PageHeader = function(opts, _yield) {
  opts = typeof opts === "undefined" && {} || opts;
  _yield = typeof _yield === "undefined" && "" || _yield;

  return yo`
    <div class="${(opts.bsClass && opts.bsClass || 'page-header')}">
      ${_yield}
    </div>
    `
}

module.exports = PageHeader;
