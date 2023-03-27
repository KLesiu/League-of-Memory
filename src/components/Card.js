import React from "react";
import './styles/Card.css'
const Card=(props)=>{

return(
   
    <div onClick={props.change} className="card">
        <img src={`http://ddragon.leagueoflegends.com/cdn/13.6.1/img/champion/${props.image}`} alt={props.name}></img>
        <h3>{props.name}</h3>
    </div>
)
}
export default Card