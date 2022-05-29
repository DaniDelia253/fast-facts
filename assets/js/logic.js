const additionCheckbox = document.getElementById('addition')
const subtractionCheckbox = document.getElementById('subtraction')
const multiplicationCheckbox = document.getElementById('multiplication')
const divisionCheckbox = document.getElementById('division')



additionCheckbox.addEventListener('change', function () {
    const additionInputs = document.getElementById('additionInputs')
    additionInputs.classList.toggle('hide')
})

subtractionCheckbox.addEventListener('change', function () {
    const subtractionInputs = document.getElementById('subtractionInputs')
    subtractionInputs.classList.toggle('hide')
})

multiplicationCheckbox.addEventListener('change', function () {
    const multiplicationInputs = document.getElementById('multiplicationInputs')
    multiplicationInputs.classList.toggle('hide')
})

divisionCheckbox.addEventListener('change', function () {
    const divisionInputs = document.getElementById('divisionInputs')
    divisionInputs.classList.toggle('hide')
})