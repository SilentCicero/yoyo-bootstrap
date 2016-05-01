const yo = require("yo-yo")
const Children = require("./children")
require("./node_modules/bootstrap-css/lib/thumbnails.css")

const Thumbnail = function(props) {
  props = props || {}

  var src = (props.src && props.src + " " || ' '),
      alt = (props.alt && props.alt + " " || ' '),
      elClass = (props.bsClass && props.bsClass + " " || 'thumbnail '),
      href = (props.href && props.href + " " || ' ');

  return props.href && yo `
    <a src="${src}" class="${elClass}" role="button">
      <img src="${src}" alt="${alt}" />
    </a>
    ` || yo `
    <div src="${src}" class="${elClass}" alt="${alt}">
      <img src="${src}" alt="${alt}" />
      <div class="caption">
        ${Children(arguments)}
      </div>
    </div>
    `
}

module.exports = Thumbnail
