const Children = function (args, childrenStart) {
  childrenStart = childrenStart || 0
  if (args.length <= childrenStart + 1) return ''
  var length = args.length
  var subject = new Array(length)
  var i
  var fn = function (item, index) {
    return index === childrenStart && '' || item
  }
  for (i = 0; i < length; i++) {
    subject[i] = fn(args[i], i)
  }
  return subject
}

module.exports = Children
