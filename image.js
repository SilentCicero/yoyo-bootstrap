const yo = require('yo-yo')
require('./less/scaffolding.less')

const Image = function (props) {
  props = props || {}

  return yo`
    <img class="${(props.bsClass && props.bsClass + ' ' || ' ') +
    (props.rounded && 'img-rounded ' || ' ') +
    (props.circle && 'img-circle ' || ' ') +
    (props.responsive && 'img-responsive ' || ' ') +
    (props.thumbnail && 'img-thumbnail ' || ' ')}"
                src="${props.src && props.src || ''}" />
    `
}

module.exports = Image
