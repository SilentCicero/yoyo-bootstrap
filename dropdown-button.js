const yo = require("yo-yo")
const connect = require("throw-down/connect")
const update = require("throw-down/update")(yo.update)
require("./node_modules/bootstrap-css/lib/dropdowns.css")

const DropdownButton = function(opts, _yield) {
  _yield = typeof _yield !== "undefined" && _yield || ""
  opts = opts || {}
  var el, open

  function toggle () {
    open = !open
    update(el, render(_yield))
    opts.onToggle && opts.onToggle(el)
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
    return yo`
      <div class="${(opts.bsClass && opts.bsClass + " " || 'dropdown btn-group ')
                  + (open && "open " || "")
                  + (opts.bsSize && "btn-group-" + opts.bsSize || "")}">
        <button onclick=${toggle} class=${"btn dropdown-toggle "
                      + (opts.bsSize && "btn-" + opts.bsSize + " " || "")
                      + (opts.bsStyle && "btn-" + opts.bsStyle + " " || "")} role="button" type="button" />
          ${opts.title || ""}
          ${opts.noCaret && "" || yo`<span class="caret"></span>`}
        </button>
        <ul class="dropdown-menu">
          ${(typeof _yield === "array" && _yield.map(function(item){return item;}) || _yield)}
        </ul>
      </div>
      `
  }

  return connect(render(_yield), track, null, onupdate)
}

module.exports = DropdownButton
