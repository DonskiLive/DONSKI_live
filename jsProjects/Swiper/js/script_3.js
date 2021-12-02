/* Initialization of Swiper */
const myImageSlider = new Swiper('.image-slider', {
	// arrows
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	},
	// navigation
	// bullet, actual state, progress bar
	pagination: {
		el: '.swiper-pagination',
		// Progressbar
		type: 'progressbar'
	},

	// Effects for switching slides
	// flip (rotation)
	effect: 'flip', // default: slide

	// Additions to flip
	fadeEffect:{
		// shadow
		slideShadows: true,
		// show just active slide
		limitRotation: true,
	},
})

// Fraction
let mySliderAllSlides = document.querySelector('.image-slider__total');
let mySliderCurrentSlide = document.querySelector('.image-slider__current');

mySliderAllSlides.innerHTML = myImageSlider.slides.length;

myImageSlider.on('slideChange', function(){
	let currentSlide = ++myImageSlider.realIndex;
	mySliderCurrentSlide.innerHTML = currentSlide;
})
