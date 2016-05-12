const yo = require('yo-yo')
const Children = require('./children')
require('./less/jumbotron.less')

const Jumbotron = function (props) {
  props = props || {}

  return yo`
    <div class="${(props.bsClass && props.bsClass || 'jumbotron ')}">
      ${Children(arguments)}
    </div>
    `
}

module.exports = Jumbotron
