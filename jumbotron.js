const yo = require("yo-yo")
const Children = require("./children")
require("./node_modules/bootstrap-css/lib/jumbotron.css")

const Jumbotron = function(props) {
  props = props || {}

  return yo`
    <div class="${(props.bsClass && props.bsClass || 'jumbotron')}">
      ${Children(arguments)}
    </div>
    `
}

module.exports = Jumbotron
