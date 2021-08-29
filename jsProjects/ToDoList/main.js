// ===== creating variables ====
const btn = document.querySelector('#btn'),
	caseInput = document.querySelector('#case-input'),
	caseUl = document.createElement('ul'),
	actualCases = []

// ===== creating UL ====
document.querySelector('.container').append(caseUl)
caseInput.focus()

// ===== by events onclick and onkeydown - receive and save data ====
btn.onclick = () => {
	receiveInputData()
}

caseInput.onkeydown = (event) => {
	if (event.keyCode === 13) {
		receiveInputData()
	}
}

function receiveInputData() {
	let text = caseInput.value.trim()
	if (!text) {
		alert('Please, enter some case')
		cleanInput(caseInput)
	} else {
		actualCases.push(createObject(text))
		caseUl.innerHTML = ''
		console.log(actualCases)
		renderUl();
		cleanInput(caseInput)
	}
}

// ===== to create a new object ====
function createObject(text) {
	return {
		toDo: text,
		done: false,
	}
}

// ===== to modify already saved object ====
caseUl.onchange = (event) => {
	for (let i = 0; i < actualCases.length; i++) {
		if (event.target.id == i) {
			actualCases[i].done = event.target.checked
		}
	}
}

// ===== to print on page all saved data and created LI ====
function renderUl() {
	actualCases.map((element, index) => createCaseLi(element.toDo, index, element.done)).forEach(li => caseUl.append(li));
}

// ===== to create the line (checkbox + label) ====
function createCaseLi(issue, index, status) {
	const li = document.createElement('li'),
		checkBox = document.createElement('input'),
		caseText = document.createElement('label');
	checkBox.type = "checkbox"
	checkBox.id = index
	checkBox.checked = status
	caseText.htmlFor = index
	li.append(checkBox); li.append(caseText)
	caseText.innerHTML = issue;
	li.classList.add('list-style')
	li.style.backgroundColor = getColor(index)
	checkBox.onchange = () => {
		caseText.classList.toggle('line-through')
		li.classList.toggle('line-color')
	}
	if (status) {
		li.classList.add('line-color')
		caseText.classList.add('line-through')
	}
	return li
}

// ===== to clean input and return focus on input ====
function cleanInput(element) {
	element.value = '';
	element.focus();
}

// ===== to generate a colors ====
function getColor(count) {
	return count % 2 == 0 ? `#6696ff2f` : `#6696ff7c`
}

