import '../css/Modal.css'
export default function ModalWindow({message1, message2, closeModalClick}) {
	document.addEventListener('keydown', closeModalByEsc)
	return (
		<div className="modal" /* onKeyDown={closeModalByEsc} tabIndex="0" */>
			<div className="modal-dialog">
				<div className="modal-close" onClick = {closeModalClick}>&times;</div>
				<h3 className="modal-text">{message1}</h3>
				<h3 className="modal-text">{message2}{printEuro(message2)}</h3>
			</div>
		</div>
	)
	function closeModalByEsc(event) {
		if (event.keyCode === 27) {
			closeModalClick()
		}
	}
	function printEuro(message){
		return message.length ? <span>&euro;</span> : ''
	}
}
