const yo = require('yo-yo')
const Children = require('./children')
require('./less/navbar.less')

const Navbar = function (props) {
  props = props || {}

  return yo`
    <nav class="${(props.bsClass && props.bsClass + ' ' || 'navbar ') +
                  (props.bsStyle && props.bsStyle + ' ' || 'navbar-default ') +
                  (props.fixedTop && 'navbar-fixed-top ' || ' ') +
                  (props.fixedBottom && 'navbar-fixed-bottom ' || ' ') +
                  (props.staticTop && 'navbar-static-top ' || ' ') +
                  (props.inverse && 'navbar-inverse ' || ' ')}">
      <div class=${(props.fluid && 'container-fluid ' || 'container ')}>
        ${Children(arguments)}
      </div>
    </nav>
    `
}

Navbar.Header = function (props) {
  props = props || {}

  return yo`
    <div class="${(props.bsClass && props.bsClass + ' ' || 'navbar-header ')}">
      ${Children(arguments)}
    </div>
    `
}

Navbar.Brand = function (props) {
  props = props || {}

  return yo`
    <div class="${(props.bsClass && props.bsClass + ' ' || 'navbar-brand ')}">
      ${Children(arguments)}
    </div>
    `
}

Navbar.Collapse = function (props) {
  props = props || {}

  return yo`
    <div class="${(props.bsClass && props.bsClass + ' ' || 'navbar-collapse collapse ')}">
      ${Children(arguments)}
    </div>
    `
}

module.exports = Navbar
