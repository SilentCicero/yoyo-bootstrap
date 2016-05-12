const yo = require('yo-yo')
const Children = require('./children')
const connect = require('throw-down/connect')
const update = require('throw-down/update')(yo.update)
const walk = require('./walk')
require('./less/component-animations.less')
require('./less/modals.less')
require('./less/close.less')

const Modal = function (props) {
  props = props || {}
  props.onEnter = props.onEnter && props.onEnter || function () {}
  props.onEntering = props.onEntering && props.onEntering || function () {}
  props.onEntered = props.onEntered && props.onEntered || function () {}
  props.onExit = props.onExit && props.onExit || function () {}
  props.onExiting = props.onExiting && props.onExiting || function () {}
  props.onExited = props.onExited && props.onExited || function () {}
  props.onHide = props.onHide && props.onHide || function () {}

  var className = (props.bsClass && props.bsClass + ' ' || 'modal ') +
                  (props.dialogClassName && props.dialogClassName + ' ' || ''),
    fadeClass = (props.show && 'fade ' || 'fade '),
    args = arguments, id

  function init (_id) {
    id = _id
    if (props.show) props.onEnter()
    if (!props.show) props.onExit()
  }

  function onload (node) {
    if (props.show) props.onEntering()
    if (!props.show) props.onExiting()

    walk(node, function (node) {
      if (!node.classList) return
      if (!node.classList.contains('close')) return
      node.addEventListener('click', props.onHide)
    })

    setTimeout(function () {
      if (props.show) {
        props.onEntered()
        fadeClass += ' in '
        update(id, render())
      }

      if (!props.show) {
        props.onExited()
        update(id, yo`<div></div>`)
      }
    }, 150)
  }

  function blurHide (e) {
    if (e.target.classList && !e.target.classList.contains('modal')) return
    props.onHide()
  }

  function render () {
    return yo`
      <div>
        <div class="modal-backdrop ${fadeClass}"></div>
        <div class="${className + fadeClass}" style="display: block;" onclick=${blurHide}>
          ${Modal.Dialog({bsClass: props.dialogComponentClass, bsSize: props.bsSize}, Children(args))}
        </div>
      </div>
      `
  }

  return connect(render, init, onload)
}

Modal.Dialog = function (props) {
  props = props || {}

  return yo`
    <div class="${(props.bsClass && props.bsClass + ' ' || 'modal-dialog ') +
                  (props.bsSize && 'modal-' + props.bsSize + ' ' || ' ')}">
      <div class="modal-content">
        ${Children(arguments)}
      </div>
    </div>
    `
}

Modal.Close = function (props) {
  props = props || {}
  props.onHide = props.onHide && props.onHide || function () {}

  return yo`
  <button type="button" onclick=${props.onHide} class="close" aria-label="Close">
    <span aria-hidden="true">×</span>
  </button>
  `
}

Modal.Header = function (props) {
  props = props || {}
  props.closeButton = props.closeButton && props.closeButton || true

  return yo`
    <div class="${(props.bsClass && props.bsClass + ' ' || 'modal-header ')}">
      ${Children(arguments)}
      ${props.closeButton && Modal.Close({onHide: props.onHide}) || ''}
    </div>
    `
}

Modal.Body = function (props) {
  props = props || {}

  return yo`
    <div class="${(props.bsClass && props.bsClass + ' ' || 'modal-body ')}">
      ${Children(arguments)}
    </div>
    `
}

Modal.Footer = function (props) {
  props = props || {}

  return yo`
    <div class="${(props.bsClass && props.bsClass + ' ' || 'modal-footer ')}">
      ${Children(arguments)}
    </div>
    `
}

module.exports = Modal
