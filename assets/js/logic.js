const additionCheckbox = document.getElementById('addition')
const subtractionCheckbox = document.getElementById('subtraction')
const multiplicationCheckbox = document.getElementById('multiplication')
const divisionCheckbox = document.getElementById('division')

const symbols = []

additionCheckbox.addEventListener('change', function () {
    const additionInputs = document.getElementById('additionInputs')
    additionInputs.classList.toggle('hide')
    if (additionCheckbox.checked === true) {
        symbols.push('+')
        console.log('+')
        console.log(symbols)
    } else {
        symbols.splice(symbols.indexOf('+'), 1)
        console.log(' removed +')
        console.log(symbols)
    }
})

subtractionCheckbox.addEventListener('change', function () {
    const subtractionInputs = document.getElementById('subtractionInputs')
    subtractionInputs.classList.toggle('hide')
    if (subtractionCheckbox.checked === true) {
        symbols.push('-')
        console.log('-')
        console.log(symbols)
    } else {
        symbols.splice(symbols.indexOf('-'), 1)
        console.log(' removed -')
        console.log(symbols)
    }
})

multiplicationCheckbox.addEventListener('change', function () {
    const multiplicationInputs = document.getElementById('multiplicationInputs')
    multiplicationInputs.classList.toggle('hide')
    if (multiplicationCheckbox.checked === true) {
        symbols.push('x')
        console.log('x')
        console.log(symbols)
    } else {
        symbols.splice(symbols.indexOf('x'), 1)
        console.log(' removed x')
        console.log(symbols)
    }
})

divisionCheckbox.addEventListener('change', function () {
    const divisionInputs = document.getElementById('divisionInputs')
    divisionInputs.classList.toggle('hide')
    if (divisionCheckbox.checked === true) {
        symbols.push('÷')
        console.log('÷')
        console.log(symbols)
    } else {
        symbols.splice(symbols.indexOf('÷'), 1)
        console.log('removed ÷')
        console.log(symbols)
    }
})