# dom-bootstrap

Bootstrap components for the actual DOM

```
npm install --save dom-boostrap
```

## Features

 - returns pure DOM components with required css
 - completely modularized and compartmentalized (i.e. `require("dom-bootstrap/button")`)
 - CSS baked into each module (only include the CSS you need)
 - follows the React Bootstrap documentation
 - almost 90% coverage of all bootstrap components
 - easily extensible
 - built with <a href="https://github.com/maxogden/yo-yo">yo-yo</a>, the lightest UI framework
 - minimal dependencies (average `4.1kb` minified + g-zipped, usually just `yo-yo`)
 - uses Bootstrap `3.3.6-stable` CSS
 - es6 import compatible (i.e. `import Alert, Button from 'dom-bootstrap'`)

## About

Basically React Bootstrap but for the actual DOM. Include only the Bootstrap components and CSS you need in pure JS with proper argument nesting. All modules are actual DOM elements that can be directly appended and used in the DOM. All base level scaffolding and common CSS is included in helper modules (e.g. `dom-bootstrap/common`).

## Usage

If you want a button:

```js
const Button = require("dom-bootstrap/button")

document.body.appendChild(Button({bsStyle: "primary", bsSize: "medium"}, "Some Inner Content"))
```

or a Grid/Column/Row:

```js
const Common = require("dom-bootstrap/common")
const Grid = require("dom-bootstrap/grid")
const Row = require("dom-bootstrap/row")
const Col = require("dom-bootstrap/col")

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
const Common = require("dom-bootstrap/common")
const Form = require("dom-bootstrap/form")
const FormControl = require("dom-bootstrap/form-control")
const Option = require("dom-bootstrap/option")

document.body.appendChild(Form({},
    FormControl(componentClass: "select", placeholder: "select",
      Option({value: "SomeVal"}, "Some Value"),
      Option({value: "SomeOtherVal", selected: 1}, "Some Other Value!")
    ),
    FormControl(id: "field1", placeholder: "Some Text Field")
  )
)
```

Notice, all component properties are notated the same as React Bootstrap. Use the React Bootstrap manual to walk through the various available properties for each component.

Manual available here: https://react-bootstrap.github.io/components.html

Note, some properties are not available, if a component property isn't working, check the actual component in `dom-bootstrap` to see if your desired property is available.

## Available Components

```
const Common = require("dom-bootstrap/common") // requires css for scaffolding/type/print/normalize/code

const Alert = require("dom-bootstrap/alert")
const Badge = require("dom-bootstrap/badge")
const ButtonGroup = require("dom-bootstrap/button-group")
const ButtonToolbar = require("dom-bootstrap/button-toolbar")
const Button = require("dom-bootstrap/button")
const Checkbox = require("dom-bootstrap/checkbox")
const Clearfix = require("dom-bootstrap/clearfix")
const Col = require("dom-bootstrap/col")
const Collapse = require("dom-bootstrap/collapse")
const ControlLabel = require("dom-bootstrap/control-label")
const DropdownButton = require("dom-bootstrap/dropdown-button")
const Fade = require("dom-bootstrap/fade")
const FormControl = require("dom-bootstrap/form-control")
const FormGroup = require("dom-bootstrap/form-group")
const Form = require("dom-bootstrap/form")
const Glyphicon = require("dom-bootstrap/glyphicon")
const Grid = require("dom-bootstrap/grid")
const HelpBlock = require("dom-bootstrap/help-block")
const Image = require("dom-bootstrap/image")
const InputGroup = require("dom-bootstrap/input-group")
const Input = require("dom-bootstrap/input")
const Jumbotron = require("dom-bootstrap/jumbotron")
const Label = require("dom-bootstrap/label")
const ListGroupItem = require("dom-bootstrap/list-group-item")
const ListGroup = require("dom-bootstrap/list-group")
const Media = require("dom-bootstrap/media")
const MenuItem = require("dom-bootstrap/menu-item")
const PageHeader = require("dom-bootstrap/page-header")
const PanelGroup = require("dom-bootstrap/panel-group")
const Panel = require("dom-bootstrap/panel")
const ProgressBar = require("dom-bootstrap/prograss-bar")
const Radio = require("dom-bootstrap/radio")
const ResponsiveEmbed = require("dom-bootstrap/responsive-embed")
const Row = require("dom-bootstrap/row")
const Table = require("dom-bootstrap/table")
const Thumbnail = require("dom-bootstrap/thumbnail")
const Well = require("dom-bootstrap/well")
const Children = require("dom-bootstrap/children")
const Option = require("dom-bootstrap/option")
```

## bootstrap-css - modularized bootstrap css using requireCSS

`dom-bootstrap` uses `require(css)` statements `bootstrap-css` package to break up the various CSS modules. This means your development environment must support importing CSS via require statements in your `node_modules`.

See browserifies <a href="https://www.npmjs.com/package/browserify-css">browserify-css</a> or webpack's <a href="https://github.com/webpack/css-loader">css-loader</a> to enable `require("file.css..")` statements.

Checkout <a href="https://github.com/StevenIseki/bootstrap-css">`bootstrap-css`</a>

## dom101 - for basic DOM tooling

For some components where DOM analysis or manipulation is required, `dom-bootstrap` uses DOM101 - a completely modularized DOM helper package. It's essentially jquery without the mess, that is properly compartmentalized.

Note, dom101 is only really used in the `Collapse` module.

Checkout <a href="https://github.com/rstacruz/dom101">`dom101`</a>

## throw-down - life cycle management

For some components such as `Collapse` some basic life cycle management is needed for the component. We chose to use `throw-down` to manage this. A small DOM life-cycle management package that weighs `.5kb` minified and g-zipped.

Checkout <a href="https://github.com/silentcicero/throw-down">`throw-down`</a>

## fast.js - method child processing (built in DSL/nesting)

`dom-bootstrap` uses `fast.js` based method argument processing to create fast built in DSL and nesting. See `./children.js` for more details.

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
