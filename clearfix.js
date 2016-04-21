const yo = require("yo-yo");
require("./node_modules/bootstrap-css/lib/responsive-utilities.css")

const Clearfix = function(opts, _yield) {
  opts = typeof opts === "undefined" && {} || opts;
  _yield = typeof _yield === "undefined" && "" || _yield;

  return yo`
    <div class="${(opts.visibleLgBlock && "visible-lg-block " || '')
                + (opts.visibleMdBlock && "visible-md-block " || '')
                + (opts.visibleSmBlock && "visible-sm-block " || '')
                + (opts.visibleXsBlock && "visible-xs-block " || '')}">
      ${_yield}
    </div>
    `
}

module.exports = Clearfix;
