import React from "react";
import './styles/Win.css'
const Win =()=>{
return(
    <div className="win">
        <h2>CONGRATULATIONS!</h2>
        <h3>You are memory champion</h3>
        <p>Your good memory will give you a lot of good things in life, trust me.</p>
        <img src={require('./images/cup.png')}></img>
    </div>
)
}
export default Win