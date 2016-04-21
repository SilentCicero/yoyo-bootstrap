var yo = require('yo-yo')

var numbers = [] // start empty
var el = list(numbers, update)

function list (items, onclick) {
  return yo`<div>Random Numbers
    <ul>
      ${items.map(function (item) {
        return yo`<li>${item}</li>`
      })}
    </ul>
    <button onclick=${onclick}>Add Random Number</button>
  </div>`
}

function update () {
  // add a new random number to our list
  numbers.push(Math.random())

  // construct a new list and efficiently diff+morph it into the one in the DOM
  var newList = list(numbers, update)
  yo.update(el, newList)
}

document.body.appendChild(el)
