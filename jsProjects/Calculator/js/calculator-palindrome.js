const plusNum1 = document.querySelector('.plus-num1'),
	plusNum2 = document.querySelector('.plus-num2'),
	plusEqual = document.querySelector('.plus-equal'),

	minNum1 = document.querySelector('.min-num1'),
	minNum2 = document.querySelector('.min-num2'),
	minEqual = document.querySelector('.min-equal'),

	multNum1 = document.querySelector('.mult-num1'),
	multNum2 = document.querySelector('.mult-num2'),
	multEqual = document.querySelector('.mult-equal'),

	divNum1 = document.querySelector('.div-num1'),
	divNum2 = document.querySelector('.div-num2'),
	divEqual = document.querySelector('.div-equal'),

	inputText = document.querySelector('.input-text'),
	checkBtn = document.querySelector('.check-btn')


let plusRes = document.querySelector('#grid-container .plus-res'),
	minRes = document.querySelector('#grid-container .min-res'),
	multRes = document.querySelector('#grid-container .mult-res'),
	divRes = document.querySelector('#grid-container .div-res'),
	attention = document.querySelector('#grid-container .attention'),
	checkRes = document.querySelector('.check-res'),
	yesOrNot = document.querySelector('.yes-not'),
	attention2 = document.querySelector('#grid-container .attention2')

plusEqual.onclick = () => {
	plusRes.innerHTML = math(plusNum1, '+', plusNum2)
	attMessage()
}
minEqual.onclick = () => {
	minRes.innerHTML = math(minNum1, '-', minNum2)
	attMessage()
}
multEqual.onclick = () => {
	multRes.innerHTML = math(multNum1, '*', multNum2)
	attMessage()
}
divEqual.onclick = () => {
	divRes.innerHTML = math(divNum1, '/', divNum2)
	attMessage()
}

function math(a, mathSign, b) {
	const num1 = +a.value, num2 = +b.value
	switch (mathSign) {
		case '+': return num1 == '' || num2 == '' ? 'Error' : (num1 + num2);
		case '-': return num1 == '' || num2 == '' ? 'Error' : num1 - num2;
		case '*': return num1 == '' || num2 == '' ? 'Error' : num1 * num2;
		case '/': return num2 <= 0 || num1 == '' || num2 == '' ? 'Error' : num1 / num2;
	}
}

function attMessage() {
	if (plusRes.innerHTML == 'Error' || minRes.innerHTML == 'Error' || multRes.innerHTML == 'Error' || divRes.innerHTML == 'Error') {
		attention.innerHTML = 'Please check entered value! (field is empty or value is not correct)'
		attention.style.color = 'red'
		plusRes.style.color = 'red'
		minRes.style.color = 'red'
		multRes.style.color = 'red'
		divRes.style.color = 'red'
	} else {
		attention.innerHTML = '* double click on a button will clean the fields'
		attention.style.color = 'black'
		plusRes.style.color = 'black'
		minRes.style.color = 'black'
		multRes.style.color = 'black'
		divRes.style.color = 'black'
	}
}

plusEqual.addEventListener('dblclick', function () {
	plusNum1.value = '';
	plusNum2.value = '';
	plusRes.innerHTML = '';
	attMessage()
})
minEqual.addEventListener('dblclick', function () {
	minNum1.value = '';
	minNum2.value = '';
	minRes.innerHTML = '';
	attMessage()
})
multEqual.addEventListener('dblclick', function () {
	multNum1.value = '';
	multNum2.value = '';
	multRes.innerHTML = '';
	attMessage()
})
divEqual.addEventListener('dblclick', function () {
	divNum1.value = '';
	divNum2.value = '';
	divRes.innerHTML = '';
	attMessage()
})


checkBtn.onclick = () => {
	checkPalindrom(inputText)
}

function checkPalindrom(string) {
	let input = string.value
	yesOrNot.innerHTML = ''
	input.toLowerCase().replaceAll(' ', '')
	if (input == '') {
		checkRes.style.color = 'red'
		checkRes.innerHTML = 'Error'
		attMessage2()
	}
	else if (input === input.split('').reverse().join('')) {
		checkRes.style.color = 'green'
		checkRes.innerHTML = 'Yes!'
		yesOrNot.innerHTML = `&#128515;`
		attMessage2()
	} else {
		checkRes.style.color = 'red'
		checkRes.innerHTML = 'Not!'
		yesOrNot.innerHTML = `&#128533;`
		attMessage2()
	}
}

checkBtn.addEventListener('dblclick', function () {
	yesOrNot.innerHTML = '';
	inputText.value = '';
	checkRes.innerHTML = '';
	attMessage2()
})

function attMessage2() {
	if (checkRes.innerHTML == 'Error') {
		attention2.innerHTML = 'Please check entered value! (field is empty)'
		attention2.style.color = 'red'
	} else {
		attention2.innerHTML = '* double click on a button will clean the fields'
		attention2.style.color = 'black'
	}
}
