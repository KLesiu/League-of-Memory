import React,{useState,useEffect} from 'react';
import './App.css';
import Header from './components/Header';
import Scoreboard from './components/Scoreboard';
import Gameboard from './components/Gameboard';
function App() {
  const [champions,setChampions]=useState([])
  const [score,setScore]=useState(0)
  const [bestScore,setBestScore]=useState(0)
  const [list,setList]=useState([])
  useEffect(()=>{

    fetch('http://ddragon.leagueoflegends.com/cdn/13.6.1/data/en_US/champion.json').then(res=> res.json()).then((response)=>{
      setChampions(response.data)
      
     
    })
  },[])
 const generateArray=()=>{
  console.log(list)
  const dataList=Object.keys(champions)
 setList(dataList.map((element)=>{
  return(
    element={name:element,image:champions[element].image.full}
    
  ) 
 }
 ))
 }

  return (
    <div className="App">
      <Header/>
      <Scoreboard score={{score:score,bestScore:bestScore}}/>
      <Gameboard generate={generateArray} list={list} />
    </div>
  );
}

export default App;
