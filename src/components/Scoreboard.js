import React from 'react'
import './styles/ScoreBoard.css'
const Scoreboard=(props)=>{
    const yourScore=props.score.score
    const bestScore=props.score.bestScore
return(
    <div className='scoreDiv'>
        <h2>Your score:<span> {yourScore}</span></h2>
        <h2>Best score:<span> {bestScore}</span></h2>
    </div>
)
}
export default Scoreboard