const yo = require("yo-yo")
require("./node_modules/bootstrap-css/lib/grid.css")

const Checkbox = function(opts, _yield) {
  opts = opts || {}
  _yield = typeof _yield === "undefined" && "" || _yield

  var content = _yield && yo`<label>${_yield}<label>` || "";
  var class = (opts.bsClass && opts.bsClass + " "
              || (opts.inline && "checkbox-inline " || 'checkbox '))
              + (opts.validationState && "has-" + opts.validationState + " " || ' ');
  var checkbox = yo`<input ${(opts.disabled && 'disabled ' || ' ')
                           + (opts.checked && 'checked="checked" ' || ' ')
                           + (opts.readOnly && "readOnly " || " ")} type="checkbox" />`

  if(opts.inline)
    return yo`
      <label class="${class}">
        ${checkbox}
        ${content}
      </label>
      `
  else
    return yo`
      <div class="${class}">
        ${checkbox}
        ${content}
      </div>
      `
}

module.exports = Checkbox
