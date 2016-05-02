const yo = require("yo-yo")
const Children = require("./children")
require("./less/grid.less")

const Col = function(props) {
  props = props || {}

  return yo`
    <div class="${(props.bsClass && props.bsClass || 'col ')
                + (props.xs && "col-xs-" + props.xs + ' ' || '')
                + (props.sm && "col-sm-" + props.sm + ' ' || '')
                + (props.md && "col-md-" + props.md + ' ' || '')
                + (props.lg && "col-lg-" + props.lg + ' ' || '')

                + (props.xsHidden && "hidden-xs " || '')
                + (props.smHidden && "hidden-sm " || '')
                + (props.mdHidden && "hidden-md " || '')
                + (props.lgHidden && "hidden-lg " || '')

                + (props.xsOffset && "col-xs-offset-" + props.xsOffset + ' ' || '')
                + (props.smOffset && "col-sm-offset-" + props.smOffset + ' ' || '')
                + (props.mdOffset && "col-md-offset-" + props.mdOffset + ' ' || '')
                + (props.lgOffset && "col-lg-offset-" + props.lgOffset + ' ' || '')

                + (props.xsPull && "col-xs-pull-" + props.xsPull + ' ' || '')
                + (props.smPull && "col-sm-pull-" + props.smPull + ' ' || '')
                + (props.mdPull && "col-md-pull-" + props.mdPull + ' ' || '')
                + (props.lgPull && "col-lg-pull-" + props.lgPull + ' ' || '')

                + (props.xsPush && "col-xs-push-" + props.xsPush + ' ' || '')
                + (props.smPush && "col-sm-push-" + props.smPush + ' ' || '')
                + (props.mdPush && "col-md-push-" + props.mdPush + ' ' || '')
                + (props.lgPush && "col-lg-push-" + props.lgPush + ' ' || '')

                + (props.className && props.className || "")}">
      ${Children(arguments)}
    </div>
    `
}

module.exports = Col
