const yo = require("yo-yo")
const Children = require("./children")
require("./less/media.less")

const Media = function(props) {
  props = props || {}

  return yo`
    <div class="${(props.bsClass && props.bsClass + " " || 'media ')}">
      ${Children(arguments)}
    </div>
    `
}

Media.List = function(props) {
  props = props || {}

  return yo`
    <ul class="${(props.bsClass && props.bsClass + " " || 'media-list ')}">
      ${Children(arguments)}
    </ul>
    `
}

Media.ListItem = function(props) {
  props = props || {}

  return yo`
    <li class="${(props.bsClass && props.bsClass + " " || 'media ')}">
      ${Children(arguments)}
    </li>
    `
}

Media.Left = function(props) {
  props = props || {}

  return yo`
    <div class="${(props.bsClass && props.bsClass + " " || 'media-left ')}">
      ${Children(arguments)}
    </div>
    `
}

Media.Right = function(props) {
  props = props || {}

  return yo`
    <div class="${(props.bsClass && props.bsClass + " " || 'media-right ')}">
      ${Children(arguments)}
    </div>
    `
}

Media.Heading = function(props) {
  props = props || {}

  return yo`
    <h4 class="${(props.bsClass && props.bsClass + " " || 'media-heading ')}">
      ${Children(arguments)}
    </h4>
    `
}

Media.Body = function(props) {
  props = props || {}

  return yo`
    <div class="${(props.bsClass && props.bsClass + " " || 'media-body ')}">
      ${Children(arguments)}
    </div>
    `
}

module.exports = Media
