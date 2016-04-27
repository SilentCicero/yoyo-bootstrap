const yo = require("yo-yo")
require("./node_modules/bootstrap-css/lib/media.css")

const Media = function(opts, _yield) {
  opts = opts || {}
  _yield = typeof _yield === "undefined" && "" || _yield

  return yo`
    <div class="${(opts.bsClass && opts.bsClass + " " || 'media ')}">
      ${_yield}
    </div>
    `
}

Media.List = function(opts, _yield) {
  opts = typeof opts === "undefined" && {} || opts
  _yield = typeof _yield === "undefined" && "" || _yield

  return yo`
    <ul class="${(opts.bsClass && opts.bsClass + " " || 'media-list ')}">
      ${_yield}
    </ul>
    `
}

Media.ListItem = function(opts, _yield) {
  opts = opts || {}
  _yield = typeof _yield === "undefined" && "" || _yield

  return yo`
    <li class="${(opts.bsClass && opts.bsClass + " " || 'media ')}">
      ${_yield}
    </li>
    `
}

Media.Left = function(opts, _yield) {
  opts = opts || {}
  _yield = typeof _yield === "undefined" && "" || _yield

  return yo`
    <div class="${(opts.bsClass && opts.bsClass + " " || 'media-left ')}">
      ${_yield}
    </div>
    `
}

Media.Right = function(opts, _yield) {
  opts = opts || {}
  _yield = typeof _yield === "undefined" && "" || _yield

  return yo`
    <div class="${(opts.bsClass && opts.bsClass + " " || 'media-right ')}">
      ${_yield}
    </div>
    `
}

Media.Heading = function(opts, _yield) {
  opts = opts || {}
  _yield = typeof _yield === "undefined" && "" || _yield

  return yo`
    <h4 class="${(opts.bsClass && opts.bsClass + " " || 'media-heading ')}">
      ${_yield}
    </h4>
    `
}

Media.Body = function(opts, _yield) {
  opts = opts || {}
  _yield = typeof _yield === "undefined" && "" || _yield

  return yo`
    <div class="${(opts.bsClass && opts.bsClass + " " || 'media-body ')}">
      ${_yield}
    </div>
    `
}

module.exports = Media
