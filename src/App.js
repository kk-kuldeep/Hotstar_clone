import React, { useState } from "react";
const myStyle ={
  color:"blue"
}


function App() {
  const[count,setCount]=useState(0);
  const elements= ["a","b","x","d","e","f"];
  const name = "kuldeep";
  let like = 1;
  return (
    <div >
     
      <h1 style={myStyle}> {count} {name} </h1>

      <ul>
        {
          elements.map((value,index)=>{
            return<li>{value}</li>
          }
          )
        }
      </ul>
      <button onClick={()=>{
          setCount(count+1)
      
      }} > Click On Me</button>
     
    </div>
  );
}

export default App;
