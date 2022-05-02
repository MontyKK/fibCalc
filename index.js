import fibCalcCache from './modules/fibCalcCache.js'
import lenghtCheck from './modules/lenghtCheck.js'
import fibShow from './modules/fibShow.js'

const fibInput = document.getElementById('fibInput')
const fibButton = document.getElementById('fibCalc')
const fibContainer = document.getElementById('fibContainer')
const fibHeader = document.getElementById('fibHeader')
const pageInfo = document.getElementById('pageInfo')
const menuHeight = document.getElementById('pageMenu').clientHeight

pageInfo.style.marginTop = menuHeight + 20 + 'px'

fibButton.addEventListener('click', function () {
  const fibLength = fibInput.value
  fibInput.value = ''
  if (lenghtCheck(fibLength)) {
    fibHeader.innerHTML = lenghtCheck(fibLength)
  } else {
    const fibArray = fibCalcCache(Number(fibLength))
    fibHeader.innerHTML = `Вычисленная последовательность`
    fibShow(fibArray, Number(fibLength), fibContainer)
  }
})
