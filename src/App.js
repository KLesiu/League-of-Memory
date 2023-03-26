import React,{useState,useEffect} from 'react';
import './App.css';
import Header from './components/Header';
import Scoreboard from './components/Scoreboard';
function App() {
  const [champions,setChampions]=useState('')
  const [score,setScore]=useState(0)
  const [bestScore,setBestScore]=useState(0)
  const [list,setList]=useState([])
  useEffect(()=>{
    console.log('siema')
    fetch('http://ddragon.leagueoflegends.com/cdn/13.6.1/data/en_US/champion.json').then(res=> res.json()).then((response)=>{
      setChampions(response.data)
    })
  },[])
  return (
    <div className="App">
      <Header/>
      <Scoreboard score={{score:score,bestScore:bestScore}}/>
      
    </div>
  );
}

export default App;
