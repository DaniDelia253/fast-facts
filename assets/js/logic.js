const additionCheckbox = document.getElementById('addition')
const subtractionCheckbox = document.getElementById('subtraction')
const multiplicationCheckbox = document.getElementById('multiplication')
const divisionCheckbox = document.getElementById('division')
const additionUpperLimit = document.getElementById('additionUpperLimit')
const subtractionUpperLimit = document.getElementById('subtractionUpperLimit')
const multiplicationUpperLimit = document.getElementById('multiplicationUpperLimit')
const divisionUpperLimit = document.getElementById('divisionUpperLimit')

const symbols = []

let additionMax = 1
let subtractionMax = 1
let multiplicationMax = 1
let divisionMax = 1

additionUpperLimit.addEventListener('input', function () {
    additionMax = this.value
    setBottomRow()
})

subtractionUpperLimit.addEventListener('input', function () {
    subtractionMax = this.value
    setBottomRow()

})

multiplicationUpperLimit.addEventListener('input', function () {
    multiplicationMax = this.value
    setBottomRow()

})

divisionUpperLimit.addEventListener('input', function () {
    divisionMax = this.value
    setBottomRow()

})


function getNum(max) {
    return Math.floor(Math.random() * max) + 1;
}


additionCheckbox.addEventListener('change', function () {
    const additionInputs = document.getElementById('additionInputs')
    additionInputs.classList.toggle('hide')
    if (additionCheckbox.checked === true) {
        symbols.push('+')

    } else {
        symbols.splice(symbols.indexOf('+'), 1)

    }
    setBottomRow()
})

subtractionCheckbox.addEventListener('change', function () {
    const subtractionInputs = document.getElementById('subtractionInputs')
    subtractionInputs.classList.toggle('hide')
    if (subtractionCheckbox.checked === true) {
        symbols.push('-')

    } else {
        symbols.splice(symbols.indexOf('-'), 1)

    }
    setBottomRow()

})

multiplicationCheckbox.addEventListener('change', function () {
    const multiplicationInputs = document.getElementById('multiplicationInputs')
    multiplicationInputs.classList.toggle('hide')
    if (multiplicationCheckbox.checked === true) {
        symbols.push('x')

    } else {
        symbols.splice(symbols.indexOf('x'), 1)

    }
    setBottomRow()

})

divisionCheckbox.addEventListener('change', function () {
    const divisionInputs = document.getElementById('divisionInputs')
    divisionInputs.classList.toggle('hide')
    if (divisionCheckbox.checked === true) {
        symbols.push('÷')

    } else {
        symbols.splice(symbols.indexOf('÷'), 1)

    }
    setBottomRow()

})

function setTopNum() {
    document.getElementById('topDigitText').innerHTML = getNum(12)

}

function setBottomRow() {
    if (symbols.length === 0) {
        document.getElementById('signText').innerHTML = ""
        document.getElementById('bottomDigitText').innerHTML = 'select your options to get started!'
    } else {
        let currentSymbolIndex = getNum(symbols.length) - 1
        let currentSymbol = symbols[currentSymbolIndex]
        document.getElementById('signText').innerHTML = currentSymbol
        switch (currentSymbol) {
            case '+':
                document.getElementById('bottomDigitText').innerHTML = getNum(additionMax)
                break;
            case '-':
                document.getElementById('bottomDigitText').innerHTML = getNum(subtractionMax)
                break;
            case 'x':
                document.getElementById('bottomDigitText').innerHTML = getNum(multiplicationMax)
                break;
            case '÷':
                document.getElementById('bottomDigitText').innerHTML = getNum(divisionMax)

                break;
        }
    }
}

setTopNum()
setBottomRow()