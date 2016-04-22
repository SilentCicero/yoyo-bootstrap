const yo = require("yo-yo");
require("./node_modules/bootstrap-css/lib/grid.css")

const Radio = function(opts, _yield) {
  opts = typeof opts === "undefined" && {} || opts;
  _yield = typeof _yield === "undefined" && "" || _yield;

  var content = _yield && yo`<label>${_yield}<label>` || "";
  var class = (opts.bsClass && opts.bsClass + " "
              || (opts.inline && "checkbox-inline " || 'checkbox '))
              + (opts.validationState && "has-" + opts.validationState + " " || ' ');
  var checkbox = yo`<input ${(opts.disabled && 'disabled ' || ' ')
                           + (opts.checked && 'checked="checked" ' || ' ')
                           + (opts.readOnly && "readOnly " || " ")} type="radio" />`

  return opts.inline && yo`<label class="${class}">${checkbox} ${content}</label>`
                     || yo`<div class="${class}">${checkbox} ${content}</div>`
}

module.exports = Radio;
