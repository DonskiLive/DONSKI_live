


// Parallax Slider
new Swiper('.parallax-slider', {
	// Switch On Parallax Slider
	parallax: true,
	// speed of switching slides
	speed: 2000,
	// arrows
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
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
	loop: false,
	// cursor of movement
	grabCursor: true,
})