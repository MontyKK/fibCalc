let showlength
let itemNumber = 0

const fibShow = (array, length, container) => {
  let fibArray = array.slice(0)

  if (!showlength) {
    showlength = length

    return fibArray.forEach(function (item) {
      container.innerHTML += `
        <li id='fib${itemNumber}'>
          <strong>Элемент №${++itemNumber}:</strong> ${item}
        </li>
      `
    })
  }

  if (showlength < length) {
    let fibArrayShow = fibArray.slice(showlength, fibArray.length)
    showlength = length

    return fibArrayShow.forEach(function (item) {
      container.innerHTML += `
        <li id='fib${itemNumber}'>
          <strong>Элемент №${++itemNumber}:</strong> ${item}
        </li>
      `
    })
  }

  if (showlength > length) {
    itemNumber = length
    let fibDel = []
    for (let i = length; i < showlength; i++) {
      fibDel.push(i)
    }
    showlength = length

    return fibDel.forEach(function (id) {
      let delItem = document.getElementById('fib' + id)
      container.removeChild(delItem)
    })
  }
}

export default fibShow
