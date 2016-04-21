const yo = require("yo-yo");
require("./node_modules/bootstrap-css/lib/forms.css")

const FormControl = function(opts, _yield) {
  opts = typeof opts === "undefined" && {} || opts;
  _yield = typeof _yield === "undefined" && "" || _yield;

  var class = (opts.bsClass && opts.bsClass + " " || 'form-control ');
  var type = (opts.type && opts.type || 'text');
  var placeholder = (opts.placeholder && opts.placeholder || '');
  var id = (opts.id && opts.id || '');
  var multiple = (opts.multiple && opts.multiple || '');

  if(type === "select") {
    return yo`
      <select id="${id}" class="${class}" placeholder="${placeholder}" ${multiple} />
        ${_yield}
      </select>
      `
  } else if(type === "textarea") {
    return yo`
      <textarea id="${id}" class="${class}" placeholder="${placeholder}">
        ${_yield}
      </textarea>
      `
  } else {
    return yo`
      <input id="${id}" type="${type}" class="${class}" placeholder="${placeholder}" />
      `
  }
}

module.exports = FormControl;
