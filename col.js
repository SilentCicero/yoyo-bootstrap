const yo = require("yo-yo");
require("./node_modules/bootstrap-css/lib/grid.css")

const Col = function(opts, _yield) {
  opts = typeof opts === "undefined" && {} || opts;
  _yield = typeof _yield === "undefined" && "" || _yield;

  return yo`
    <div class="${(opts.bsClass && opts.bsClass || 'col')
                + (opts.xs && "col-xs-" + opts.xs + ' ' || '')
                + (opts.sm && "col-sm-" + opts.sm + ' ' || '')
                + (opts.md && "col-md-" + opts.md + ' ' || '')
                + (opts.lg && "col-lg-" + opts.lg + ' ' || '')

                + (opts.xsHidden && "hidden-xs" + ' ' || '')
                + (opts.smHidden && "hidden-sm" + ' ' || '')
                + (opts.mdHidden && "hidden-md" + ' ' || '')
                + (opts.lgHidden && "hidden-lg" + ' ' || '')

                + (opts.xsOffset && "col-xs-offset-" + opts.xsOffset + ' ' || '')
                + (opts.smOffset && "col-sm-offset-" + opts.smOffset + ' ' || '')
                + (opts.mdOffset && "col-md-offset-" + opts.mdOffset + ' ' || '')
                + (opts.lgOffset && "col-lg-offset-" + opts.lgOffset + ' ' || '')

                + (opts.xsPull && "col-xs-pull-" + opts.xsPull + ' ' || '')
                + (opts.smPull && "col-sm-pull-" + opts.smPull + ' ' || '')
                + (opts.mdPull && "col-md-pull-" + opts.mdPull + ' ' || '')
                + (opts.lgPull && "col-lg-pull-" + opts.lgPull + ' ' || '')

                + (opts.xsPush && "col-xs-push-" + opts.xsPush + ' ' || '')
                + (opts.smPush && "col-sm-push-" + opts.smPush + ' ' || '')
                + (opts.mdPush && "col-md-push-" + opts.mdPush + ' ' || '')
                + (opts.lgPush && "col-lg-push-" + opts.lgPush + ' ' || '')

                + (opts.className && opts.className || "")}">
      ${_yield}
    </div>
    `
}

module.exports = Col;
