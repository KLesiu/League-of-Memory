import React from "react";

import './styles/Card.css'
const Card=(props)=>{
  
return(
   
    <div className="card">
        <img src={`http://ddragon.leagueoflegends.com/cdn/13.6.1/img/champion/${props.image}`} alt={props.name}></img>
        <h3 onClick={()=>props.handleClick(props.name)}>{props.name}</h3>
    </div>
)
}
export default Card