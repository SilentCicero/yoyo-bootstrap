const yo = require("yo-yo")
const Children = require("./children")
const connect = require("throw-down/connect")
const update = require("throw-down/update")(yo.update)
const outerHeight = require("dom101/outer-height")
require("./less/component-animations.less")

const Collapse = function(props) {
    props = props || {}
    props.onEnter = props.onEnter || function (n) {}
    props.onExit = props.onExit || function (n) {}
    props.onEntered = props.onEntered || function (n) {}
    props.onExited = props.onExited || function (n) {}
    var id, height = "0px", updated, timeout, className = "collapsing "

    function construct (_id) {
      id = _id
    }

    function onload(node) {
      props.in && props.onEnter(node) || !props.in && props.onExit(node)
      height = (props.in && outerHeight(node.children[0]) || 0) + 'px'
      update(node, render())

      timeout = setTimeout(function(){
        if(id !== node.dataset.tdid) return;
        className = props.in && "collapse in " || "collapse "
        props.in && props.onEntered(node) || !props.in && props.onExited(node)
        update(node, render())
      }, props.timeout && props.timeout || 300)
    }

    function unload(){
      clearTimeout(timeout)
    }

    function render () {
      return yo `
        <div class=${className} style=${height && ("height:" + height) || ""}>
          ${Children(arguments)}
        </div>
      `
    }

    return connect(render, construct, onload, null, unload);
}

module.exports = Collapse
