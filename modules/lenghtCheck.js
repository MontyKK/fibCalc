const lenghtCheck = (inputLenght) => {
  if (inputLenght === '') {
    return 'Укажите длинну последовательности!'
  }

  inputLenght = Number(inputLenght)

  if (isNaN(inputLenght)) {
    return 'Укажите длинну последовательности в виде числа!'
  }

  if (inputLenght <= 0) {
    return 'Длинна последовательности должна быть больше 0!'
  }
}

export default lenghtCheck
