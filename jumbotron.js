const yo = require("yo-yo")
const Children = require("./children")
require("./css/jumbotron.css")

const Jumbotron = function(props) {
  props = props || {}

  return yo`
    <div class="${(props.bsClass && props.bsClass || 'jumbotron')}">
      ${Children(arguments)}
    </div>
    `
}

module.exports = Jumbotron
