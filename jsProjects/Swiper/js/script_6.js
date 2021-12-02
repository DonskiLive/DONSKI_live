/* Initialization of Swiper */
let myImageSlider = new Swiper('.image-slider', {
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
	effect: 'slide', // default: slide

	// Additions to flip
	fadeEffect: {
		// shadow
		slideShadows: true,
		// show just active slide
		limitRotation: true,
	},

	// Amount of slides for show
	slidesPerView: 2,
	// space between slides
	spaceBetween: 30,
	// cursor of movement
	grabCursor: true,

	// Transfer of control to other Sliders (only to one side) - without creation of variables
	/* 	controller:{
			control: myTextSlider
		} */
})

// Additional text slider
let myTextSlider = new Swiper('.text-slider', {
	// Amount of slides for show
	slidesPerView: 2,
	// space between slides
	spaceBetween: 30,
	// cursor of movement
	grabCursor: true,

	// Renew Swiper in case of elements change of slider
	observer: true,
	// Renew Swiper in case of parent elements change of slider
	observeParents: true,
	// Renew Swiper in case of children elements change of slider
	observeSlideChildren: true,

	// Events
	on: {
		// event of Initialization
		init: function () {
			console.log('Slider started')
		},
		// event of changing slide
		slideChange: function () {
			console.log('Slide changed')
		}
	}
})


// Transfer of control between Sliders
myImageSlider.controller.control = myTextSlider;
myTextSlider.controller.control = myImageSlider

// Parameters 
// Receiving
let qSlides = myImageSlider.slides.length

// Changing
myImageSlider.params.speed = 3000

// Methods
// Renew slider
myImageSlider.update()

// Switch to slide two, with speed 800
myImageSlider.slideTo(2, 800)

// Events
// Event for changing slider
myImageSlider.on('slideChange', function () {
	console.log('slide changed')
})

