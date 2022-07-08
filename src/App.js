import React from "react"



export default function App() {
    const [motorState, setMotorState] = React.useState("AN");
    }

    return (
    
<div className ="motor">
    <select 
    className="custom-select" 
    value={motorState}
    onChange={(e)=>{
    const selectedMotor=e.target.value;
    setMotorState(selectedMotor);
    }}
   >
    <option value="AC">AC for International std Mount</option>
        <option value="AN">AN International Std Mount</option>
        <option value="CC">CC for alt std mount, closed key</option>
        <select/>
        {motorState}
       </ div>
)
     
   



    

      
    
    
  