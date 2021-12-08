class Contact {
	constructor(customerName, year, month, day, hour = '', minute = '', phone = null, email = null, calendar = null, color = null, date = null) {
		this.customerName = customerName
		this.year = year
		this.month = month
		this.day = day
		this.hour = hour
		this.minute = minute
		this.phone = phone
		this.email = email
		this.calendar = calendar
		this.color = color
		this.date = date
	}
}