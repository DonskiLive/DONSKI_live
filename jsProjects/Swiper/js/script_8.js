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
	effect: 'slide', // default: slide

	// Amount of slides for showing slides
	slidesPerView: 3,

	// Space between slides
	spaceBetween: 30,

	// Active slide in center
	centeredSlides: true,

	// Started slide
	initialSlide: 0,

	// Additions to flip
	fadeEffect: {
		// shadow
		slideShadows: true,
		// show just active slide
		limitRotation: true,
	},

	// cursor of movement
	grabCursor: true,

	// Speed of slides switching 
	speed: 800, // default 300 ms

	// Virtual slides
	// generation of slides
	virtual: {
		slides: (function () {
			let slide = []
			for (let i = 0; i < 500; i++) {
				slide.push(`<div class='image-slider__text'>Slide ${i}</div>`)
			}
			return slide
		}()),
	}
})

// Start automatically slide change on mouseover
let sliderBlock = document.querySelector('.image-slider')

sliderBlock.addEventListener('mouseenter', function (e) {
	myImageSlider.params.autoplay.disableOnInteraction = false;
	myImageSlider.params.autoplay.delay = 500;
	myImageSlider.autoplay.start();
});

sliderBlock.addEventListener('mouseleave', function (e) {
	myImageSlider.autoplay.stop();
})