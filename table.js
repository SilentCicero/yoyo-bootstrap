const yo = require("yo-yo")
const Children = require("./children")
require("./less/variables.less")
require("./less/mixins.less")
require("./less/tables.less")

const Table = function(props) {
  props = props || {}

  var elClass = (props.bsClass && props.bsClass + " " || 'table ')
              + (props.striped && "table-striped " || '')
              + (props.bordered && "table-bordered " || '')
              + (props.condensed && "table-condensed " || '')
              + (props.hover && "table-hover " || '');

  return yo`
    <table class="${elClass}">
      ${Children(arguments)}
    </table>
    `
}

module.exports = Table
