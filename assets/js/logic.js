const additionCheckbox = document.getElementById('addition')
const subtractionCheckbox = document.getElementById('subtraction')
const multiplicationCheckbox = document.getElementById('multiplication')
const divisionCheckbox = document.getElementById('division')
const additionUpperLimit = document.getElementById('additionUpperLimit')
const subtractionUpperLimit = document.getElementById('subtractionUpperLimit')
const multiplicationUpperLimit = document.getElementById('multiplicationUpperLimit')
const divisionUpperLimit = document.getElementById('divisionUpperLimit')

const symbols = []
let selectedCharacter = ''
let submittedAns = ''
let correctAns = ''

let additionMax = 1
let subtractionMax = 1
let multiplicationMax = 1
let divisionMax = 1

//onlt allow numbers to be entered into the textarea
function validateValue(event) {
    const elem = event.target;
    const value = elem.value;
    const numVal = value.replace(/\D/, "");
    elem.value = numVal;
}

//submit textarea when the enter key is pressed
function submitOnEnter(event) {
    if (event.which === 13) {
        submittedAns = event.target.value
        event.target.form.dispatchEvent(new Event("submit", { cancelable: true }));
        event.target.value = "";
        event.preventDefault(); // Prevents the addition of a new line in the text field (not needed in a lot of cases)
    }
}
document.getElementById("usermsg").addEventListener("keypress", submitOnEnter);
document.getElementById("form").addEventListener("submit", (event) => {
    event.preventDefault();
    verifyAndReload()
});

//when user selects character...
function handleCharacterSubmission(event) {
    selectedCharacter = event.target.value
    console.log(selectedCharacter)
}

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
        document.getElementById('bottomDigitText').classList.add('smallerText')
    } else {
        document.getElementById('bottomDigitText').classList.remove('smallerText')
        setTopNum()
        let currentSymbolIndex = getNum(symbols.length) - 1
        let currentSymbol = symbols[currentSymbolIndex]
        document.getElementById('signText').innerHTML = currentSymbol
        switch (currentSymbol) {
            case '+':
                document.getElementById('bottomDigitText').innerHTML = getNum(additionMax)
                break;
            case '-':
                subtractThisNum = 0
                getNumToSubt()
                function getNumToSubt() {
                    subtractThisNum = getNum(subtractionMax)
                    if (subtractThisNum > parseFloat(document.getElementById('topDigitText').innerHTML)) {
                        getNumToSubt()
                    }
                    return subtractThisNum
                }
                document.getElementById('bottomDigitText').innerHTML = subtractThisNum
                break;
            case 'x':
                document.getElementById('bottomDigitText').innerHTML = getNum(multiplicationMax)
                break;
            case '÷':
                //set the bottom number to 1-12
                let newBottomNum = getNum(12)
                document.getElementById('bottomDigitText').innerHTML = newBottomNum
                //set the top number to botttom num * a new num 1-12
                let newTopNum = newBottomNum * (getNum(divisionMax))
                document.getElementById('topDigitText').innerHTML = newTopNum
                break;
        }
        calculateCorrectAnswer(currentSymbol)
    }
}

function calculateCorrectAnswer(currentSymbol) {
    let firstNum = ''
    let secondNum = ''
    switch (currentSymbol) {
        case '+':
            firstNum = document.getElementById('topDigitText').innerHTML
            secondNum = document.getElementById('bottomDigitText').innerHTML
            correctAns = parseFloat(firstNum) + parseFloat(secondNum)
            break;
        case '-':
            firstNum = document.getElementById('topDigitText').innerHTML
            secondNum = document.getElementById('bottomDigitText').innerHTML
            correctAns = parseFloat(firstNum) - parseFloat(secondNum)
            break;
        case 'x':
            firstNum = document.getElementById('topDigitText').innerHTML
            secondNum = document.getElementById('bottomDigitText').innerHTML
            correctAns = parseFloat(firstNum) * parseFloat(secondNum)
            break;
        case '÷':
            firstNum = document.getElementById('topDigitText').innerHTML
            secondNum = document.getElementById('bottomDigitText').innerHTML
            correctAns = parseFloat(firstNum) / parseFloat(secondNum)
            break;
    }
}

function getCharacter() {
    //later it might need to take global variable that determines what type of character
    //fetch the character based on number that is inputted
    let urlExtras = ''
    switch (selectedCharacter) {
        case 'monster':
            urlExtras = '&set=set2'
            break;
        case 'RoboHead':
            urlExtras = '&set=set3'
            break;
        case 'kitten':
            urlExtras = '&set=set4'
            break;
        case 'human':
            urlExtras = '&set=set5'
            break;
        default:
            break
    }
    // slash# is robot
    // slash#?set=set2 is monster
    //slash#?set=set3 is roboheads
    // slash#?set=set4 is kittens
    // slash#?set=set5 is humans
    // slash#?bgset=bg1 or slash#?bgset=bg2 is different backgrounds
    // <img src="https://robohash.org/YOUR-TEXT.png"></img>
    //display it in the right spot
    let imgTag = `<img src="https://robohash.org/${submittedAns}.png?size=150x150${urlExtras}"></img>`
    document.getElementById('characterText').innerHTML = imgTag
}

function correctCharacter() {
    //call getCharacter
    //for a certain amount of time...
    //get the character that is displayed in the div and add the classes to make it go to the left
    //add the text underneath
}

function incorrectCharacter() {
    //call getCharacter
    //for a certain amount of time...
    //get the character that is displayed in the div and add the classes to make it go to the right
    //add the text underneath
}

function verifyAndReload() {
    if (parseFloat(submittedAns) === parseFloat(correctAns)) {
        //new function to display CORRECT ROBOT
        getCharacter()
        setBottomRow()
        return
    } else {
        //new function to display INCORRECT ROBOT
        document.getElementById('characterText').innerHTML = "<img height='200' src='https://media1.giphy.com/media/CoND5j6Bn1QZUgm1xX/giphy.gif'></img>"

        return
    }
}

setBottomRow()

