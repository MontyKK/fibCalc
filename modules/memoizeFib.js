const memoizeFib = (fn) => {
  let cache
  let length = 0
  return (arg) => {
    if (length >= arg) {
      return cache.slice(0, arg)
    } else {
      let result = fn(arg, cache)
      cache = result
      length = arg
      return result
    }
  }
}

export default memoizeFib
