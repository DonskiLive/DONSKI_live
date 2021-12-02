/* Initialization of Swiper */
new Swiper('.image-slider', {
	// arrows
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	},
	// navigation
	// bullet, actual state, progress bar
	pagination: {
		el: '.swiper-pagination',
		// Fraction
		type: 'fraction',
		// customs fraction output
		renderFraction: function (currentClass, totalClass) {
			return 'Photo <span class="' + currentClass + '"></span>' +
				' from ' +
				'<span class="' + totalClass + '"></span>'
		},
	},
	// scroll
	scrollbar: {
		el: '.swiper-scrollbar',
		// possibility to move the scrollbar
		draggable: true,
	},
	// Switch ON/OFF 
	// image movement on PC
	simulateTouch: true,
	// sensitivity of swiper
	touchRatio: 1,
	// angle of swiper reaction and movement
	touchAngle: 45,
	// cursor of movement
	grabCursor: true,

	// switch after click on slider
	slideToClickedSlide: true,

	// Navigation according to hash
	hashNavigation: {
		// watching state 
		watchState: true,
	},

	// keyboard controls
	keyboard: {
		// switch On/Off
		enable: true,
		// switch On/Off only when slider inside range of viewport
		onlyInViewport: true,
		// switch On/Off keyboard control pageUp, pageDown
		pageUpDown: true,
	},

	// mouse controls
	mousewheel: {
		// sensitivity of mousewheel
		sensitivity: 1,
		// Object Class on which mousewheel will work
		eventsTarget: ".image-slider"
	},

	// Autoheight
	autoHeight: false,

	// Amount of slides for showing slides
	slidesPerView: 1,
	/* slidesPerView: 'auto', */

	// Disabling functionality
	// if slides amount smaller then slidesPerView parameter
	watchOverflow: true,

	// Space between slides
	spaceBetween: 30,

	// Amount of slides per group
	slidesPerGroup: 1,

	// Active slide in center
	centeredSlides: true,

	// Started slide
	initialSlide: 0,

	// Multi columns of slides
	slidesPerColumn: 1, // auto hight must be false; slidesPerView: cannot be 'auto'

	// Infinity slides
	loop: true,

	// Amount of duplicated slides
	loopedSlides: 0,

	// Free mode
	freeMode: true,

	// Automatic scrolling of slides
	autoplay: {
		// Time break between slides
		delay: 2000,
		// Finish on last slide
		stopOnLastSlide: true, // if Infinity slides option = loop: true - then autoplay also will be infinity
		// Switch Off after manual switch
		disableOnInteraction: true,
	},

	// Speed of slides switching 
	speed: 800, // default 300 ms

	// Vertical slider
	direction: 'horizontal',

	// Effects for switching slides
	// coverflow
	effect: 'slide', // default: slide

	// Additions to coverflow
	fadeEffect: {
		// angle
		rotate: 20,
		// stretch
		stretch: 50,
		// shadow
		slideShadows: true,
	},

	// Breakpoints dependence from screen width ! instead of screen width size possible to use '@0.75' aspect ratio (height / width)
	breakpoints: {
		480: {
			slidesPerView: 1,
		},
		992: {
			slidesPerView: 1,
		}
	},

	// Disable preloading of images
	preloadImages: true,

	// Lazy loading images loadings
	lazy: {
		// load at start of switching slide
		loadOnTransitionStart: false,
		// load previous and next images
		loadPrevNext: false,
	},

	// Watching for visual slides
	watchSlidesProgress: true,
	// Add class to visual slides
	watchSlidesVisibility: true,

	// Miniatures (preview)
	thumbs:{
		// swiper with miniatures and settings
		swiper:{
			el: '.image-mini-slider',
			slidesPerView: 4,
		}
	}


})