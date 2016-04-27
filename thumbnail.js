const yo = require("yo-yo")
require("./node_modules/bootstrap-css/lib/thumbnails.css")

const Thumbnail = function(opts, _yield) {
  opts = opts || {}
  _yield = typeof _yield === "undefined" && "" || _yield

  var src = (opts.src && opts.src + " " || ' '),
      alt = (opts.alt && opts.alt + " " || ' '),
      elClass = (opts.bsClass && opts.bsClass + " " || 'thumbnail '),
      href = (opts.href && opts.href + " " || ' ');

  return opts.href && yo `
    <a src="${src}" class="${elClass}" role="button">
      <img src="${src}" alt="${alt}" />
    </a>
    ` || yo `
    <div src="${src}" class="${elClass}" alt="${alt}">
      <img src="${src}" alt="${alt}" />
      <div class="caption">
        ${_yield}
      </div>
    </div>
    `
}

module.exports = Thumbnail
