const yo = require('yo-yo')
const Children = require('./children')
require('./less/grid.less')

const Grid = function (props) {
  props = props || {}

  return yo`
    <div class="${(props.bsClass && props.bsClass || 'container ') +
    (props.fluid && props.fluid || 'container-fluid ')}">
      ${Children(arguments)}
    </div>
    `
}

module.exports = Grid
