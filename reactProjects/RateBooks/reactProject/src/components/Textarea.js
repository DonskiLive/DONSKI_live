const Textarea = ({ label, id, error,...rest }) => (
    <div className = "form-group">
      <label htmlFor={id}>{label}</label>
      {!error ? <textarea id={id} className = "form-control" {...rest} /> : <textarea id={id} style={{borderColor: "red"}} className = "form-control" {...rest} />}
      {error ? <p className = 'text-danger p-0 m-0' style={{textAlign: 'right'}}>{error}</p> : <p className = 'p-0 m-0' style={{opacity:'0'}}>place for errors</p>}
      {/* {error && <p className = 'text-danger'>{error}</p>} */}
    </div>
  );

export default Textarea