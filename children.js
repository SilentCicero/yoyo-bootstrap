const Children = function(args) {
  if (args.length <= 1) return ""
  var length = args.length,
    subject = new Array(length),
    i,
    fn = function(item, index) {
      return index === 0 && "" || item
    }
  for (i = 0; i < length; i++) {
    subject[i] = fn(args[i], i)
  }
  return subject
}

module.exports = Children
