const yo = require("yo-yo")
const Children = require("./children")
const connect = require("throw-down/connect")
const update = require("throw-down/update")(yo.update)
require("./less/dropdowns.less")

const DropdownButton = function(props) {
  props = props || {}
  var el, open

  function toggle () {
    open = !open
    update(el, render(_yield))
    props.onToggle && props.onToggle(el)
  }

  function track (node) {
    el = node

    document.addEventListener("click", function(e){
      if(e.target != el && !el.contains(e.target) && open)
        toggle()
    });
  }

  function onupdate(node) {el = node}

  function render(_yield) {
    var btn = yo`<button onclick=${toggle} class=${"btn dropdown-toggle "
                  + (props.bsSize && "btn-" + props.bsSize + " " || "")
                  + (props.bsStyle && "btn-" + props.bsStyle + " " || "")} role="button" type="button" />
      ${props.title || ""}
      ${props.noCaret && "" || yo`<span class="caret"></span>`}
    </button>`

    if(props.disabled) btn.setAttribute("disabled", true)

    return yo`
      <div class="${(props.bsClass && props.bsClass + " " || 'dropdown btn-group ')
                  + (open && "open " || "")
                  + (props.bsSize && "btn-group-" + props.bsSize || "")}">
        ${btn}
        <ul class="dropdown-menu">
          ${(typeof _yield === "array" && _yield.map(function(item){return item;}) || Children(arguments))}
        </ul>
      </div>
      `
  }

  return connect(render(_yield), track, null, onupdate)
}

module.exports = DropdownButton
