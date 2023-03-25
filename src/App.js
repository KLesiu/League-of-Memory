import React,{useState,useEffect} from 'react';
import './App.css';

function App() {
  const [champions,setChampions]=useState('')
  useEffect(()=>{
    console.log('siema')
    fetch('http://ddragon.leagueoflegends.com/cdn/13.6.1/data/en_US/champion.json').then(res=> res.json()).then((response)=>{
      setChampions(response.data)
    })
  },[])
  return (
    <div className="App">
     <button onClick={()=>{
      console.log(champions)
     }}></button>
    </div>
  );
}

export default App;
