# yoyo-bootstrap

Bootstrap components for the actual DOM (built with yo-yo)

```
npm install --save yoyo-boostrap
```

## Features

 - Returns pure DOM components
 - Completely modularized and compartmentalized (i.e. `require("yoyo-bootstrap/button")`)
 - LESS baked into each module (only include the CSS/LESS you need)
 - Use custom Bootstrap themes (i.e. `bootswatch`)
 - Follows the React Bootstrap documentation
 - Almost 90% coverage of all bootstrap components
 - Easily extensible
 - Built with <a href="https://github.com/maxogden/yo-yo">yo-yo</a>, the lightest UI framework
 - Minimal dependencies (average `4.1kb` minified + g-zipped, usually just `yo-yo`)
 - Uses Bootstrap `3.3.6-stable` LESS
 - ES6 import compatible (i.e. `import Alert, Button from 'yoyo-bootstrap'`)

## About

Basically React Bootstrap but for the actual DOM with Bootstrap less baked in. Include only the Bootstrap components and CSS you need in pure JS with proper argument nesting. All modules are actual DOM elements that can be directly appended and used in the DOM. All base level scaffolding and common CSS is included in helper modules (e.g. `yoyo-bootstrap/common`).

## Usage

If you want a button:

```js
const Button = require("yoyo-bootstrap/button")

document.body.appendChild(Button({bsStyle: "primary", bsSize: "medium"}, "Some Inner Content"))
```

or a Grid/Column/Row:

```js
const Common = require("yoyo-bootstrap/common")
const Grid = require("yoyo-boostrap/grid")
const Row = require("yoyo-bootstrap/row")
const Col = require("yoyo-bootstrap/col")

document.body.appendChild(Grid({},
    Row({},
      Col({sm: 12, md: 8, lg: 3}, "Column 1 Content"),
      Col({sm: 12, md: 4, lg: 9}, "Column 2 Content")
      ),
    Row({},
      Col({sm: 3, md: 4}, "Column 1 Content"),
      Col({sm: 3, md: 4}, "Column 2 Content"),
      Col({sm: 3, md: 4}, "Column 3 Content")
      )
  )
)
```

or a form:

```js
const Common = require("yoyo-bootstrap/common")
const Form = require("yoyo-bootstrap/form")
const FormControl = require("yoyo-bootstrap/form-control")
const Option = require("yoyo-bootstrap/option")

document.body.appendChild(Form({},
    FormControl(componentClass: "select", placeholder: "select",
      Option({value: "SomeVal"}, "Some Value"),
      Option({value: "SomeOtherVal", selected: 1}, "Some Other Value!")
    ),
    FormControl(id: "field1", placeholder: "Some Text Field")
  )
)
```

how about a modal:

```js
const yo = require("yo-yo")
const Common = require("yoyo-bootstrap/common")
const Button = require("yoyo-bootstrap/button")
const Modal = require("yoyo-bootstrap/modal")
const connect = require("throw-down/connect")
const update = require("throw-down/update")(yo.update)

const Dialog = function(){
  var id, show = false

  function init (_id) {
    id = _id
  }

  function toggle () {
    show = !show;
    update(id, render())
  }

  function render() {
    return yo`
    <div>
      ${Button({bsStyle: "primary", bsSize: "large", onClick: toggle}, "Nicks Button")}
      ${Modal({show: show, onHide: toggle},
        Modal.Header({}, "Some Header"),
        Modal.Body({}, "The Body"),
        Modal.Footer({},
          Button({bsStyle: "default", onClick: toggle}, "Close"),
          Button({bsStyle: "primary"}, "Send")
        )
      )}
    </div>
    `
  }

  return connect(render, init)
}

document.body.appendChild(Dialog())
```

Notice, all component properties are notated the same as React Bootstrap. Use the React Bootstrap manual to walk through the various available properties for each component.

Manual available here: https://react-bootstrap.github.io/components.html

Note, some properties are not available, if a component property isn't working, check the actual component in `yoyo-bootstrap` to see if your desired property is available.

## Available Components

```
const Common = require("yoyo-bootstrap/common") // requires css for scaffolding/type/print/normalize/code

const Alert = require("yoyo-bootstrap/alert")
const Badge = require("yoyo-bootstrap/badge")
const ButtonGroup = require("yoyo-bootstrap/button-group")
const ButtonToolbar = require("yoyo-bootstrap/button-toolbar")
const Button = require("yoyo-bootstrap/button")
const Checkbox = require("yoyo-bootstrap/checkbox")
const Clearfix = require("yoyo-bootstrap/clearfix")
const Col = require("yoyo-bootstrap/col")
const Collapse = require("yoyo-bootstrap/collapse")
const ControlLabel = require("yoyo-bootstrap/control-label")
const DropdownButton = require("yoyo-bootstrap/dropdown-button")
const Fade = require("yoyo-bootstrap/fade")
const FormControl = require("yoyo-bootstrap/form-control")
const FormGroup = require("yoyo-bootstrap/form-group")
const Form = require("yoyo-bootstrap/form")
const Glyphicon = require("yoyo-bootstrap/glyphicon")
const Grid = require("yoyo-bootstrap/grid")
const HelpBlock = require("yoyo-bootstrap/help-block")
const Image = require("yoyo-bootstrap/image")
const InputGroup = require("yoyo-bootstrap/input-group")
const Input = require("yoyo-bootstrap/input")
const Jumbotron = require("yoyo-bootstrap/jumbotron")
const Label = require("yoyo-bootstrap/label")
const ListGroupItem = require("yoyo-bootstrap/list-group-item")
const ListGroup = require("yoyo-bootstrap/list-group")
const Media = require("yoyo-bootstrap/media")
const MenuItem = require("yoyo-bootstrap/menu-item")
const PageHeader = require("yoyo-bootstrap/page-header")
const PanelGroup = require("yoyo-bootstrap/panel-group")
const Panel = require("yoyo-bootstrap/panel")
const ProgressBar = require("yoyo-bootstrap/prograss-bar")
const Radio = require("yoyo-bootstrap/radio")
const ResponsiveEmbed = require("yoyo-bootstrap/responsive-embed")
const Row = require("yoyo-bootstrap/row")
const Table = require("yoyo-bootstrap/table")
const Thumbnail = require("yoyo-bootstrap/thumbnail")
const Well = require("yoyo-bootstrap/well")
const Children = require("yoyo-bootstrap/children")
const Option = require("yoyo-bootstrap/option")
```

## dom101 - for basic DOM tooling

For some components where DOM analysis or manipulation is required, `yoyo-bootstrap` uses DOM101 - a completely modularized DOM helper package. It's essentially jquery without the mess, that is properly compartmentalized.

Note, dom101 is only really used in the `Collapse` module.

Checkout <a href="https://github.com/rstacruz/dom101">`dom101`</a>

## throw-down - life cycle management

For some components such as `Collapse` some basic life cycle management is needed for the component. We chose to use `throw-down` to manage this. A small DOM life-cycle management package that weighs `.5kb` minified and g-zipped.

Checkout <a href="https://github.com/silentcicero/throw-down">`throw-down`</a>

## fast.js - method child processing (built in DSL/nesting)

`yoyo-bootstrap` uses `fast.js` based method argument processing to create fast built in DSL and nesting. See `./children.js` for more details.

See <a href="https://github.com/codemix/fast.js">`fast.js`</a> for more details

## Pitfall: Glyphicons/SVG

SVG components just as glyphicon data must be imported separately, this is due to the limitations of requiring CSS in JS.

## License

```
The MIT License (MIT)

Copyright (c) 2016 Nick Dodson

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
