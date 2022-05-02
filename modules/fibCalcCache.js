import memoizeFib from './memoizeFib.js'

const fibCalcCache = memoizeFib((length, cache) => {
  const fib = cache || []
  let fibNum = fib[fib.length - 1] || BigInt(1)
  for (let i = fib.length || 0; i < length; i++) {
    if (i === 0) {
      fib.push(BigInt(0))
    } else {
      if (i !== 1) {
        fibNum = fibNum + fib[i - 2]
      }
      fib.push(fibNum)
    }
  }
  return fib
})

export default fibCalcCache
