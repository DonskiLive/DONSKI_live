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
		// bullets
		clickable: true,
		// dynamic bullets
		dynamicBullets: true,
		// customs bullets
		renderBullet: function (index, className) {
			return '<span class="' + className + '">' + (index + 1) + '</span>';
		},
		// possibility to move the scrollbar
		draggable: true,
	},

	// Infinity slides
	loop: false,

	// cursor of movement
	grabCursor: true,

	// Speed of slides switching 
	speed: 800, // default 300 ms

	// Effects for switching slides
	// cube
	effect: 'cube', // default: slide

	// Additions to cube
	fadeEffect: {
		// shadow
		slideShadows: true,
		shadow: true,
		shadowOffset: 20,
		shadowScale: 0.94,
	},

	// Image zoom
	zoom: {
		// maximum zooming
		maxRatio: 5,
		// minimum zooming
		minRatio: 1,
	}
})

/* Slider in slider */
new Swiper('.image-in-slider', {
	// cursor of movement
	grabCursor: true,
	pagination: {
		el: '.swiper-pagination',
		// bullets
		clickable: true,
		// possibility to move the scrollbar
		/* draggable: true, */
	},
	// function correction for slider in slider
	nested: true,
})