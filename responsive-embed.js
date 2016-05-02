const yo = require("yo-yo")
const Children = require("./children")
require("./less/responsive-embed.less")

const ResponsiveEmbed = function(props) {
  props = props || {}

  return yo`
    <div class="${(props.bsClass && props.bsClass + " " || 'embed-responsive ')
                + (props.a16by9 && "embed-responsive-16by9 " || ' ')
                + (props.a4by3 && "embed-responsive-4by3 " || ' ')}">
      ${Children(arguments)}
    </div>
    `
}

module.exports = ResponsiveEmbed
