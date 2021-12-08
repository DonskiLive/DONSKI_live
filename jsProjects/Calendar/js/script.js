moment.updateLocale("pl", {
	week: {
		dow: 1, // First day of week is Monday
		doy: 4  // First week of year must contain 1 January (7 + 1 - 1)
	}
});


startApp()
function startApp() {
	var today = moment();
	function Calendar(selector, firstStart = true) {
		let store = Store.getAll()
		if (!store.length) {
			setWeekends()
			console.log('Demo data saved successfully')
			store = Store.getAll()
		}
		console.log(store)
		this.el = document.querySelector(selector);
		this.events = store;
		this.current = moment().date(1);
		this.draw();
		if (firstStart) {
			var current = document.querySelector('.today');
		} else {
			var current = document.querySelector('.last-selected');
		}
		if (current) { // automatic open event for current day
			var self = this;
			window.setTimeout(function () {
				self.openDay(current);
			}, 500);
		}
	}

	Calendar.prototype.draw = function () {
		//Create Header
		this.drawHeader();

		//Draw Month
		this.drawMonth();

		/* this.drawLegend(); */
	}

	Calendar.prototype.drawHeader = function () {
		var self = this;
		if (!this.header) {
			//Create the header elements
			this.header = createElement('div', 'header');
			this.header.className = 'header';

			this.title = createElement('h1');

			var right = createElement('div', 'right');
			right.addEventListener('click', function () { self.nextMonth(); });


			var left = createElement('div', 'left');
			left.addEventListener('click', function () { self.prevMonth(); });

			//Append the Elements
			this.header.appendChild(this.title);
			this.header.appendChild(right);
			this.header.appendChild(left);
			this.el.appendChild(this.header);
		}
		this.title.innerHTML = this.current.format('MMMM YYYY');

		const leftArrow = document.querySelector('.left')
		if (moment().format("dddd, MMMM Do YYYY").split(' ')[1] === this.title.innerText.split(' ')[0]) {
			leftArrow.classList.add('display-none')
		} else {
			leftArrow.classList.remove('display-none')
		}
	}

	Calendar.prototype.drawMonth = function () {
		var self = this;
		if (this.month) {
			this.oldMonth = this.month;
			this.oldMonth.className = 'month out ' + (self.next ? 'next' : 'prev');
			this.oldMonth.addEventListener('webkitAnimationEnd', function () {
				self.oldMonth.parentNode.removeChild(self.oldMonth);
				self.month = createElement('div', 'month');
				self.backFill();
				self.currentMonth();
				self.fowardFill();
				self.el.appendChild(self.month);
				window.setTimeout(function () {
					self.month.className = 'month in ' + (self.next ? 'next' : 'prev');
				}, 16);
			});
		} else {
			this.month = createElement('div', 'month');
			this.el.appendChild(this.month);
			this.backFill();
			this.currentMonth();
			this.fowardFill();
			this.month.className = 'month new';
		}
	}

	Calendar.prototype.backFill = function () {
		var clone = this.current.clone();
		var dayOfWeek = clone.day();

		if (!dayOfWeek) { return; }

		clone.subtract('days', dayOfWeek + 1);

		for (var i = dayOfWeek; i > 0; i--) {
			this.drawDay(clone.add('days', 1));
		}
	}

	Calendar.prototype.fowardFill = function () {
		var clone = this.current.clone().add('months', 1).subtract('days', 1);
		var dayOfWeek = clone.day();

		if (dayOfWeek === 6) { return; }

		for (var i = dayOfWeek; i < 6; i++) {
			this.drawDay(clone.add('days', 1));
		}
	}

	Calendar.prototype.currentMonth = function () {
		var clone = this.current.clone();

		while (clone.month() === this.current.month()) {
			this.drawDay(clone);
			clone.add('days', 1);
		}
	}

	Calendar.prototype.getWeek = function (day) {
		if (!this.week || day.day() === 0) {
			this.week = createElement('div', 'week');
			this.month.appendChild(this.week);
		}
	}

	Calendar.prototype.drawDay = function (day) {
		var self = this;
		this.getWeek(day);

		//Outer Day
		var outer = createElement('div', this.getDayClass(day));

		if (!outer.classList.contains('other')) {
			outer.addEventListener('click', function () {
				self.openDay(this, day);
				selectedDay = this
			});
		}

		//Day Name
		var name = createElement('div', 'day-name', day.format('ddd'));

		//Day Number
		var number = createElement('div', 'day-number', day.format('DD'));

		//Events
		var events = createElement('div', 'day-events');
		this.drawEvents(day, events);

		outer.appendChild(name);
		outer.appendChild(number);
		outer.appendChild(events);
		this.week.appendChild(outer);
	}

	Calendar.prototype.drawEvents = function (day, element) {
		if (day.month() === this.current.month()) {
			var todaysEvents = this.events.reduce(function (memo, ev) {
				if (ev.date.isSame(day, 'day')) {
					memo.push(ev);
				}
				return memo;
			}, []);

			if ((moment().month() !== day.month() || moment().date() <= day.date()) && !(day.diff(moment(), 'M') >= 2)) {
				if (todaysEvents.length) {
					if (todaysEvents.find(ev => ev.customerName === 'weekend')) {
						var evSpan = createElement('span', 'red');
						element.appendChild(evSpan)
					} else {
						var evSpan = createElement('span', 'yellow');
						element.appendChild(evSpan)
					}
				} else {
					var evSpan = createElement('span', 'green');
					element.appendChild(evSpan);
				}
			}
		}
	}

	Calendar.prototype.getDayClass = function (day) {
		classes = ['day'];
		const store = Store.getAll()
		const lastSelected = store[store.length - 1].date
		if (day.month() !== this.current.month()) {
			classes.push('other');
		} else if (today.isSame(day, 'day')) {
			classes.push('today');
		} else if (lastSelected.isSame(day, 'day')) {
			classes.push('last-selected')
		}
		return classes.join(' ');
	}

	Calendar.prototype.openDay = function (el) {
		var details, arrow;
		var dayNumber = +el.querySelectorAll('.day-number')[0].innerText || +el.querySelectorAll('.day-number')[0].textContent;
		var day = this.current.clone().date(dayNumber);

		/* console.log(day) */ //! selected day

		var currentOpened = document.querySelector('.details');

		//Check to see if there is an open details box on the current row
		if (currentOpened && currentOpened.parentNode === el.parentNode) {
			details = currentOpened;
			arrow = document.querySelector('.arrow');
			arrow.classList.remove('opacity-0')
		} else {
			//Close the open events on different week row
			//currentOpened && currentOpened.parentNode.removeChild(currentOpened);
			if (currentOpened) {
				currentOpened.addEventListener('webkitAnimationEnd', function () {
					currentOpened.parentNode.removeChild(currentOpened);
				});
				currentOpened.addEventListener('oanimationend', function () {
					currentOpened.parentNode.removeChild(currentOpened);
				});
				currentOpened.addEventListener('msAnimationEnd', function () {
					currentOpened.parentNode.removeChild(currentOpened);
				});
				currentOpened.addEventListener('animationend', function () {
					currentOpened.parentNode.removeChild(currentOpened);
				});
				currentOpened.className = 'details out';
			}

			//Create the Details Container
			details = createElement('div', 'details in');


			//Create the arrow
			var arrow = createElement('div', 'arrow');

			//Create the event wrapper

			details.appendChild(arrow);
			el.parentNode.appendChild(details);
		}

		var todaysEvents = this.events.reduce(function (memo, ev) {
			if (ev.date.isSame(day, 'day')) {
				memo.push(ev);
			}
			return memo;
		}, []);

		this.renderEvents(todaysEvents, details, day);

		arrow.style.left = el.offsetLeft - el.parentNode.offsetLeft + 27 + 'px';
	}

	Calendar.prototype.renderEvents = function (events, ele, selectedDay) {

		//Remove any events in the current details element
		var currentWrapper = ele.querySelector('.events');

		var wrapper = createElement('div', 'events in' + (currentWrapper ? ' new' : ''));

		let startHours = 9.5
		if (selectedDay.format("YYYY-MM-DD") === moment().format("YYYY-MM-DD")) {
			if (startHours - 1 < +selectedDay.hour()) {
				startHours = +selectedDay.hour() + 1
			}
		}

		const endHours = 21, slotsAmount = (parseInt(endHours) - parseInt(startHours)) * 2

		let hours = parseInt(startHours)

		let slots = Number.isInteger(startHours) ? [`${startHours}:00`] : []
		for (let i = 0; i < slotsAmount; i++) {
			if (i % 2) {
				hours++
				minutes = '00'
			} else { minutes = '30' }
			slots.push(hours + ':' + minutes)
		}
		!Number.isInteger(endHours) && slots.push(`${parseInt(endHours)}:30`)
		const timeEvents = events.map(ev => ev.date.format("HH:mm"))

		if (startHours > endHours) {
			var div = createElement('div', 'event');
			const timeSelectText = createElement('p', 'timeSelectText', 'Wybierz inną datę. Niestety dziś nie ma już wolnych terminów')
			div.appendChild(timeSelectText);
			wrapper.appendChild(div);
		}

		else if (selectedDay.diff(moment(), 'M') >= 2){
			var div = createElement('div', 'event');
			const timeSelectText = createElement('p', 'timeSelectText', 'Wybierz inną datę. Wybrany dzień jeszcze nie dostępny')
			div.appendChild(timeSelectText);
			wrapper.appendChild(div);
		}

		else if (selectedDay.isBefore(moment()) && moment().format("YYYY-MM-DD") !== selectedDay.format("YYYY-MM-DD")) {
			var div = createElement('div', 'event');
			const timeSelectText = createElement('p', 'timeSelectText', 'Wybierz inną datę. Wybrany dzień już minął')
			div.appendChild(timeSelectText);
			wrapper.appendChild(div);
		}
		else if (events.length) {
			if (events.find(ev => ev.customerName !== 'weekend')) {
				var div = createElement('div', 'event');
				const timeSelectText = createElement('p', 'timeSelectText', 'Wybierz dogodny dla siebie czas:')
				const timeDivFlex = createElement('div', 'display-flex')
				slots.forEach(slot => {
					const timeValue = createElement('p', 'timeValue')
					const timeSlot = createElement('div', 'timeSlotStyle')

					if (timeEvents.includes(slot)) {
						timeSlot.setAttribute("class", "timeSlotBlocked")
						timeSlot.setAttribute("disabled", true)
					} else {
						timeSlot.addEventListener('click', (e) => modalWindow(e, selectedDay))
					}
					timeValue.innerHTML = slot
					timeSlot.append(timeValue)
					timeDivFlex.append(timeSlot)
				})

				div.appendChild(timeSelectText);
				div.appendChild(timeDivFlex);
				wrapper.appendChild(div);
			} else {
				var div = createElement('div', 'event');
				const timeSelectText = createElement('p', 'timeSelectText', 'Wybierz inną datę. Niestety w tym dniu nie jesteśmy dostępni')
				div.appendChild(timeSelectText);
				wrapper.appendChild(div);
			}
		} else {
			var div = createElement('div', 'event');
			const timeSelectText = createElement('p', 'timeSelectText', 'Wybierz dogodny dla siebie czas:')
			const timeDivFlex = createElement('div', 'display-flex')

			slots.forEach(slot => {
				const timeValue = createElement('p', 'timeValue')
				const timeSlot = createElement('div', 'timeSlotStyle')
				timeSlot.addEventListener('click', (e) => modalWindow(e, selectedDay))
				timeValue.innerHTML = slot
				timeSlot.append(timeValue)
				timeDivFlex.append(timeSlot)
			})
			div.appendChild(timeSelectText);
			div.appendChild(timeDivFlex);
			wrapper.appendChild(div);
		}

		if (currentWrapper) {
			currentWrapper.className = 'events out';
			currentWrapper.addEventListener('webkitAnimationEnd', function () {
				currentWrapper.parentNode.removeChild(currentWrapper);
				ele.appendChild(wrapper);
			});
			currentWrapper.addEventListener('oanimationend', function () {
				currentWrapper.parentNode.removeChild(currentWrapper);
				ele.appendChild(wrapper);
			});
			currentWrapper.addEventListener('msAnimationEnd', function () {
				currentWrapper.parentNode.removeChild(currentWrapper);
				ele.appendChild(wrapper);
			});
			currentWrapper.addEventListener('animationend', function () {
				currentWrapper.parentNode.removeChild(currentWrapper);
				ele.appendChild(wrapper);
			});
		} else {
			ele.appendChild(wrapper);
		}
	}

	Calendar.prototype.drawLegend = function () {
		var legend = createElement('div', 'legend');
		var calendars = this.events.map(function (e) {
			return e.calendar + '|' + e.color;
		}).reduce(function (memo, e) {
			if (memo.indexOf(e) === -1) {
				memo.push(e);
			}
			return memo;
		}, []).forEach(function (e) {
			var parts = e.split('|');
			var entry = createElement('span', 'entry ' + parts[1], parts[0]);
			legend.appendChild(entry);
		});
		this.el.appendChild(legend);
	}

	Calendar.prototype.nextMonth = function () {
		this.current.add('months', 1);
		this.next = true;
		this.draw();
	}

	Calendar.prototype.prevMonth = function () {
		this.current.subtract('months', 1);
		this.next = false;
		this.draw();
	}

	window.Calendar = Calendar;

	function createElement(tagName, className, innerText) {
		var ele = document.createElement(tagName);
		if (className) {
			ele.className = className;
		}
		if (innerText) {
			ele.innderText = ele.textContent = innerText;
		}
		return ele;
	}

	document.addEventListener('keydown', closeEventsByEsc)

	function closeEventsByEsc(event) {
		if (event.key === 'Escape') {
			closeEventContainer()
		}
	}

	const bodyArea = document.querySelector('body')

	bodyArea.addEventListener('click', function (e) {
		if (e.target.tagName === 'BODY') {
			closeEventContainer()
		}
	})

	const closeEventContainer = () => {
		const arrow = document.querySelector('.arrow')
		arrow.classList.add('opacity-0')
		const eventContainer = document.querySelector('.events')
		if (eventContainer !== null) {
			eventContainer.remove()
		}
	}

	const modalWindow = (e, selectedDay) => {
		const timeSlotCollection = document.querySelectorAll('.timeSlotStyle')
		timeSlotCollection.forEach(e => e.classList.remove('timeSlotStyleGreen'))
		e.currentTarget.classList.add('timeSlotStyleGreen')
		const modal = document.createElement('div');
		modal.classList.add('modal');
		modal.innerHTML = `
<div class="modal-dialog animate__animated animate__fadeInDown">
<form action="#">
<div class="modal-close" data-close>&times</div>
<h3>Prosimy o potwierdzenie wybranej daty i godziny <br/> oraz o podanie danych kontaktowych</h3>
<h2 class='modal-text'>Skontaktujemy się:</h2>
<input id='new-appointment' type="text" class="modal-input appointment" value="${selectedDay.format("l")} / ${e.target.innerText.split(':')[0] + ':' + e.target.innerText.split(':')[1]}" disabled> 
<input id='customer-name' type="text" class="modal-input" placeholder="wpisz swoje imię:" required>
<input id='customer-contacts' type="text" class="modal-input" placeholder="wpisz adres e-mail lub numer komórkowy:" required>
<button class = "btn btn-submit">Potwierdzam</button>
</form>
</div>`
		modal.addEventListener('click', closeModalWindow);
		document.addEventListener('keydown', closeModalByEsc);
		const form = modal.querySelector('form');
		form.addEventListener('submit', formHandler)
		document.querySelector('body').append(modal);
		document.body.style.overflow = 'hidden';
	}

	function closeModal() {
		document.querySelector('.modal').removeEventListener('click', closeModalWindow);
		document.removeEventListener('keydown', closeModalByEsc);
		document.querySelector('.modal form').removeEventListener('submit', formHandler);
		document.querySelector('.modal').remove();
		document.body.style.overflow = '';
	}

	function closeModalWindow(event) {
		const target = event.target
		if (target === document.querySelector('.modal') || target === document.querySelector('.modal [data-close]')) {
			closeModal();
		}
	}

	function closeModalByEsc(event) {
		if (event.key === 'Escape')
			closeModal();
	}

	function formHandler(event) {
		event.preventDefault();
		const newAppointment = event.target.querySelector('#new-appointment').value
		const customerName = event.target.querySelector('#customer-name').value
		const customerContacts = event.target.querySelector('#customer-contacts').value

		const year = newAppointment.split(' / ')[0].split('.')[2],
			month = newAppointment.split(' / ')[0].split('.')[1] - 1,
			day = newAppointment.split(' / ')[0].split('.')[0],
			hour = newAppointment.split(' / ')[1].split(':')[0],
			minute = newAppointment.split(' / ')[1].split(':')[1]

		Store.save(new Contact(customerName, year, month, day, hour, minute, !customerContacts.includes('@') && customerContacts, customerContacts.includes('@') && customerContacts))

		closeModal();
		const calendarContainer = document.querySelector('#calendar')
		calendarContainer.innerHTML = ''
		new Calendar('#calendar', false);
	}

	new Calendar('#calendar');

	function setWeekends(){
		Store.save(new Contact("weekend", 2021, 11, 05))
		Store.save(new Contact("weekend", 2021, 11, 12))
		Store.save(new Contact("weekend", 2021, 11, 19))
		Store.save(new Contact("weekend", 2021, 11, 26))
		Store.save(new Contact("weekend", 2022, 0, 2))
		Store.save(new Contact("weekend", 2022, 0, 9))
		Store.save(new Contact("weekend", 2022, 0, 16))
		Store.save(new Contact("weekend", 2022, 0, 23))
		Store.save(new Contact("weekend", 2022, 0, 30))
		Store.save(new Contact("weekend", 2022, 1, 6))
	}
};


