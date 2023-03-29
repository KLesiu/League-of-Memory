import React from "react";
import './styles/Level.css'

const Levels=(props)=>{
return(
    <div onLoad={props.switch} className="lvlBoard">
        <h2>Level: {props.lvl}</h2>
        <p>Let's click the champions but remember dont click on the same champion two times!
            If you click you lose.
        </p>

    </div>
)
}
export default Levels