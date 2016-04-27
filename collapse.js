const yo = require("yo-yo")
const connect = require("throw-down/connect")
const update = require("throw-down/update")(yo.update)
const outerHeight = require("dom101/outer-height")
require("./node_modules/bootstrap-css/lib/component-animations.css")

const Collapse = function(opts, _yield) {
    opts = opts || {}
    _yield = typeof _yield === "undefined" && "" || _yield
    opts.onEnter = opts.onEnter || function (n) {}
    opts.onExit = opts.onExit || function (n) {}
    opts.onEntered = opts.onEntered || function (n) {}
    opts.onExited = opts.onExited || function (n) {}
    var id, height = "0px", updated, timeout, className = "collapsing "

    function construct (_id) {
      id = _id
    }

    function onload(node) {
      opts.in && opts.onEnter(node) || !opts.in && opts.onExit(node)
      height = (opts.in && outerHeight(node.children[0]) || 0) + 'px'
      update(node, render())

      timeout = setTimeout(function(){
        if(id !== node.dataset.tdid) return;
        className = opts.in && "collapse in " || "collapse "
        opts.in && opts.onEntered(node) || !opts.in && opts.onExited(node)
        update(node, render())
      }, opts.timeout && opts.timeout || 300)
    }

    function unload(){
      clearTimeout(timeout)
    }

    function render () {
      return yo `
        <div class=${className} style=${height && ("height:" + height) || ""}>
          ${_yield}
        </div>
      `
    }

    return connect(render, construct, onload, null, unload);
}

module.exports = Collapse
