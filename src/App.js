import React, { useState } from 'react'

function App() {
	
	const handleUpdate = () =>{
	  let newTxt = textVal.toUpperCase();
	  setText(newTxt);
	  showAlert('Upper case made','success');
  }
  const handleUpdateToLower = () =>{
	  let newTxt = textVal.toLowerCase();
	  setText(newTxt);
	  showAlert('Lower case made','success');
  }
  
  const clearText = () =>{
	  setText('');
	  showAlert('Text cleared','success');
  }
  const handleChange = (event) =>{
	  setText(event.target.value);
  }
  
 
  const [alert,setAlert]  = useState(null);
  
  const showAlert = (message,type) => {
	     setAlert({
			 message: message,
			 type: type
		 });
		 setTimeout(()=>{setAlert(null)},1500);
  }
  const [textVal,setText]  = useState('');
  const [btnText,setBtnText]  = useState('Enable Dark Mode');
  const [myStyle,setMyStyle]  = useState({
	  color: 'black',
	  background: 'white'
  });
  const [copyText,setCopyText]  = useState('Copy Text');
  const copyTextHandler = () => {
	  var text=document.getElementById('myText');
	  text.select();
	  navigator.clipboard.writeText(text.value);
	  setCopyText('copied');
	  showAlert('Copied','success');
	  setTimeout(()=>{setCopyText('Copy Text')},4000);
  }
   const toggleMode = () =>{
	  if(myStyle.color == 'black'){
		  setBtnText('Enable Light Mode');
		  showAlert('Enable Light Mode','success');
	      setMyStyle({
					  color: 'white',
					  background: 'black'
				});
	  }else{
		      setBtnText('Enable Dark Mode');
			  showAlert('Enable Dark Mode','success');
			  setMyStyle({
					  color: 'black',
					  background: 'white'
				});
	  }
  }
  
  return (
    <>
	<Alert alert={alert} />
	<div className="form-check form-switch">
	  <input className="form-check-input" type="checkbox" role="switch" onClick={toggleMode} />
	  <label className="form-check-label">{btnText}</label>
	</div>
	<div className="container" style={myStyle}>
	<textarea className="form-control mb-2" id="myText" value={textVal} rows="8" onChange={handleChange} ></textarea>
	<button className="btn btn-primary btn-md me-2" onClick={handleUpdate}>Convert to upper case</button>
	<button className="btn btn-primary btn-md me-2" onClick={handleUpdateToLower}>Convert to lowerCase case</button>
	<button className="btn btn-primary btn-md" onClick={clearText}>ClearText</button>
	<button className="btn btn-primary btn-md" onClick={toggleMode}>{btnText}</button>
	<button className="btn btn-primary btn-md" onClick={copyTextHandler}>{copyText}</button>
	</div>
	<div className="container" style={myStyle}>
		<h1>Your text summary</h1>
		<p> { textVal ? textVal.split(" ").length   : 0 } words and {textVal.length} characters</p>
		<p> { 0.008* (textVal ? textVal.split(" ").length   : 0)} minutes to read</p>
		<p>Preview</p>
		<p>{textVal}</p>
	</div>
    </>
  );
}

const Alert = (props) => {
	
	return ( 
	props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
	  <strong>{props.alert.type}!</strong> {props.alert.message}
	  <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
	</div>
	);
}

export default App;
