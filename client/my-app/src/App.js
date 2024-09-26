import React, {useState,useEffect} from "react";
import "./App.css";
import Axios from 'axios'
function App()
{
const[sname,setStudentName]= useState("");
const[roll,setRoll]= useState("");
const[branch,setBranch]= useState("");
const[backlogs,setBacklogs]= useState("");
const[mobile,setMobile]= useState("");
const submitReview=()=>
{
Axios.post('http://localhost:3003/students',
{name:sname,
roll:roll,
branch:branch,
backlogs:backlogs,
mobile:mobile}).then(()=>
{
alert("success");
})
.catch(error => {
    console.error("There was an error!", error);
  });
};
return (
<div className="App">
<h1>Fill Student Details</h1>
<div className="information">
<label><b>Student Name</b></label>
<input
type="text"
name="sname"
onChange={(e)=>{
setStudentName(e.target.value);
}}
required/>
<label><b>Roll no.</b></label>
<input
type="number"
name="roll"
onChange={(e)=>{
setRoll(e.target.value);
}}
required/>
<label><b>branch</b></label>
<input
type="text"
name="Branch"
onChange={(e)=>{
setBranch(e.target.value);
}}
required/>
<label><b>backlogs</b></label>
<input
type="checkbox"
name="Backlogs"
checked={backlogs}
onChange={(e)=>{
setBacklogs(e.target.checked);
}}
required/>
<label><b>mobile</b></label>
<input
type="number"
name="mobile"
onChange={(e)=>{
setMobile(e.target.value);
}}
required/>
<button onClick={submitReview}><b>Submit</b></button>
</div>
</div>);
}
export default App;