const APPOINTMENTS_KEY = 'APPOINTMENTS'

class Store {
	static save(appointment) {
		const allAppointments = this.getAll()
		allAppointments.push(appointment)
		this.updateLocalStorage(allAppointments)
	}
	static remove(index) {
		const Appointments = this.getAll()
		Appointments.splice(index, 1)
		this.updateLocalStorage(Appointments)
	}
	static getAll() {
		let str = localStorage.getItem(APPOINTMENTS_KEY)
		const data = (str) ? JSON.parse(str) : []
		if (data.length){
			for(let k of data){
				k.date = moment().year(k.year).month(k.month).date(k.day).hour(k.hour).minute(k.minute)
			}
		}
		return data
	}
	static updateLocalStorage(appointments) {
		localStorage.setItem(APPOINTMENTS_KEY, JSON.stringify(appointments))
	}
}