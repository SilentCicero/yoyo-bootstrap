const yo = require("yo-yo")
require("./node_modules/bootstrap-css/lib/jumbotron.css")

const Jumbotron = function(opts, _yield) {
  opts = opts || {}
  _yield = typeof _yield === "undefined" && "" || _yield

  return yo`
    <div class="${(opts.bsClass && opts.bsClass || 'jumbotron')}">
      ${_yield}
    </div>
    `
}

module.exports = Jumbotron
