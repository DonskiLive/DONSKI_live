const Select = ({ label, id, children, error, ...rest }) => (
	<div>
	  <label htmlFor={id}>{label}</label>
	  {!error ? <select id={id} {...rest} className = 'form-select'>
		{children}
	  </select> : <select style={{borderColor: "red"}} id={id} {...rest} className = 'form-select'>
		{children}
	  </select>}
	  {error ? <p className = 'text-danger p-0 m-0' style={{textAlign: 'right'}}>{error}</p> : <p className = 'p-0 m-0' style={{opacity:'0'}}>place for errors</p>}
	</div>
  );

  export default Select