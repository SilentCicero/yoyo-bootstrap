const yo = require("yo-yo");
require("./node_modules/bootstrap-css/lib/labels.css")

const Label = function(opts, _yield) {
  opts = typeof opts === "undefined" && {} || opts;
  _yield = typeof _yield === "undefined" && "" || _yield;

  return yo`
    <span class="${(opts.bsClass && opts.bsClass + " " || 'label ')
                 + (opts.bsStyle && "label-" + opts.bsStyle + " " || 'label-default ')}">
      ${_yield}
    </span>
    `
}

module.exports = Label;
