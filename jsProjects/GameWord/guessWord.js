const audioCorrect = new Audio('correct.mp3'),
    audioFault = new Audio('fault.mp3'),
    audioSad = new Audio('end.mp3'),
    audioGood = new Audio('good.mp3'),
    audioSuper = new Audio('super.mp3'),
    audioWindowChange = new Audio('window-change.mp3'),
    header = document.querySelector('.header'),
    footer = document.querySelector('.footer'),
    input = document.querySelector("#userAnswer"),
    checkBtn = document.querySelector("#checkBtn"),
    startBtn = document.querySelector("#startBtn"),
    language = document.querySelector('#language'),
    inputEng = document.querySelector('#eng'),
    inputRus = document.querySelector('#rus'),
    wordsBank = [
        ["European football champion 2021", 'Italy', 'Чемпион Европы по футболу 2021 г.', 'Италия'],
        ["The largest country in the world", 'Russia', 'Самая большая страна в мире', 'Россия'],
        ["The longest river in the world", 'Amazon', 'Самая длинная река в мире', 'Амазонка'],
        ["The deepest lake in the world", 'Baikal', 'Самое глубокое озеро в мире', 'Байкал'],
        ["Сountry with largest population", 'China', 'Страна с наибольшим населением', 'Китай']
    ],
    questionEng = 0, answerEng = 1, questionRus = 2, answerRus = 3;

let maxFaultsCount = 5, actualFaults, questionLang, answerLang, wordNumber, guessWord, answerArr, numLetter, wordState = document.querySelector("#wordState");

hide(checkBtn)
hide(input)
windowMove(header, footer)
startBtn.onclick = () => {
    windowMove(header, footer)
    audioWindowChange.play()
    languageSelection()
    if (wordsBank.length) {
        wordNumber = getRandomNumber(wordsBank.length)
        console.log(wordNumber)
        console.log(wordsBank)
        guessWord = wordsBank[wordNumber][answerLang].toUpperCase();
        answerArr = makeSymbolArr(guessWord);
        changeMessage(`My word is ${guessWord.length} letters<br><b>${wordsBank[wordNumber][questionLang]}</b>`);
        changeInfo('Enter the letter:')
        show(input)
        hide(startBtn);
        hide(language);
        show(checkBtn);
        wordState.innerHTML = `${answerArr.join(" ")}`
        input.value = "";
        input.focus();
        actualFaults = maxFaultsCount
    } else {
        windowMove(header, footer)
        audioGood.play();
        hide(input)
        hide(startBtn)
        wordState.innerHTML = 'You finished the game!<br>See you next time! &#128512'
        changeMessage('')
        changeInfo('')
    }
}

function makeSymbolArr(str) {
    const arr = [];
    arr.length = str.length;
    for (let i = 0; i < arr.length; i++) {
        arr[i] = "-";
    }
    return arr;
}

checkBtn.onclick = () => {
    let inputLetter = input.value;
    if (checkLetter(inputLetter)) {
        audioCorrect.play();
        changeMessage(`Super!<br><b>${wordsBank[wordNumber][questionLang]}</b>`);
        changeInfo('Try to guess another letter:')
        wordState.innerHTML = `${answerArr.join(" ")}`
        input.value = "";
        input.focus();
        if (!answerArr.includes("-")) {
            windowMove(header, footer)
            audioWindowChange.play();
            audioSuper.play();
            hide(input)
            hide(checkBtn)
            show(startBtn)
            changeMessage('')
            changeInfo('If you want to guess a new word, press "Start"')
            wordState.innerHTML += `<br> <p>Supper! You win! &#128522</p>`
            wordsBank.splice(wordNumber, 1)
        }
    } else {
        if (actualFaults) {
            audioFault.play()
            changeMessage(`No such letter...<br><b>${wordsBank[wordNumber][questionLang]}</b>`);
            changeInfo(`You have still ${actualFaults} attempts. Try again:`)
            input.value = "";
            input.focus();
            actualFaults--
            console.log(actualFaults)
        } else {
            windowMove(header, footer)
            audioWindowChange.play();
            hide(input)
            hide(startBtn)
            hide(checkBtn)
            wordState.innerHTML = 'Sorry you lost!<br>See you next time! &#128533'
            changeMessage('')
            changeInfo('')
            audioSad.play();
        }
    }
}

function checkLetter(letter) {
    let letterContain = false;
    for (let i = 0; i < guessWord.length; i++) {
        if (letter.toUpperCase() == guessWord[i] && answerArr[i] == "-") {
            letterContain = true;
            answerArr[i] = letter.toUpperCase();
            numLetter--;
        }
    } return letterContain;
}

function getRandomNumber(range) {
    return Math.floor(Math.random() * range)
}

function languageSelection() {
    if (inputEng.checked) {
        questionLang = questionEng
        answerLang = answerEng
    } else {
        questionLang = questionRus
        answerLang = answerRus
    }
}

function changeMessage(message) {
    document.querySelector("#message").innerHTML = message;
}

function changeInfo(message) {
    document.querySelector("#info").innerHTML = message;
}

function hide(element) {
    element.style.display = "none"
}

function show(element) {
    element.style.display = "block"
}

function windowMove(el1, el2) {
    let pos = 400;
    const move = setInterval(frame, 1);
    function frame() {
        if (pos == 80) {
            clearInterval(move);
        } else {
            pos -= 5;
            el1.style.height = pos + 'px';
            el2.style.height = pos + 'px';
        }
    }
}