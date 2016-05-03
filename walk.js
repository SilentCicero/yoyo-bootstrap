function walk (n, v) {
  v(n); for (var i = 0; i < n.childNodes.length; i++) {walk(n.childNodes[i], v)}
}

module.exports = walk
