const yo = require("yo-yo")
const Children = require("./children")
require("./node_modules/bootstrap-css/lib/tables.css")

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
