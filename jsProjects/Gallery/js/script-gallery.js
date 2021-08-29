const galleryImg = document.querySelector('#gallery-img'),
	mainContent = document.querySelector('.center'),
	selector = document.querySelector('.selector'),
	btnPrev = document.querySelector('#prev'),
	btnNext = document.querySelector('#next'),
	imgArr = ['animals', 'bear', 'belka', 'birds', 'birdsMore', 'fish', 'fishingB', 'frogs', 'hunting', 'insect', 'monkey', 'suslik']

let count = 0
btnPrev.onclick = () => {
	count--
	count < 0 ? count = imgArr.length - 1 : count
	galleryImg.src = `./img/${imgArr[count]}.jpg`
	setOpacity(galleryImg)
}
btnNext.onclick = () => {
	count++
	count > imgArr.length - 1 ? count = 0 : count
	galleryImg.src = `./img/${imgArr[count]}.jpg`
	setOpacity(galleryImg)
}

function setOpacity(element) {
	let op = 0;
	const move = setInterval(frame, 1.5);
	function frame() {
		if (op == 50) {
			clearInterval(move);
		} else {
			op++;
			element.style.opacity = (op / 50);
		}
	}
}

galleryImg.addEventListener('dblclick', function (e) {
	mainContent.classList.toggle('full-screen');
	galleryImg.classList.toggle('full-screen');
	setOpacity(galleryImg)
	btnPrev.classList.toggle('full-screen-prev');
	setOpacity(btnPrev)
	btnNext.classList.toggle('full-screen-next');
	setOpacity(btnNext)
});