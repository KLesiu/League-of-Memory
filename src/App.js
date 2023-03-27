import React,{useState,useEffect} from 'react';
import './App.css';
import Header from './components/Header';
import Scoreboard from './components/Scoreboard';
import Card from './components/Card';
function App() {
  
  const [score,setScore]=useState(0)
  const [bestScore,setBestScore]=useState(0)
  const [list,setList]=useState([])
  useEffect(()=>{

    fetch('http://ddragon.leagueoflegends.com/cdn/13.6.1/data/en_US/champion.json').then(res=> res.json()).then((response)=>{
      const dataList=Object.keys(response.data)
      const champions=dataList.map((element)=>{
        return(
          
          <Card image={response.data[element].image.full} name={element} />
        )
      })
      setList(champions)
      

     
    })
    
  },[])
//  const generateArray=()=>{
//   console.log(list)
//   const dataList=Object.keys(champions)
//  setList(dataList.map((element)=>{
//   return(
//     element={name:element,image:champions[element].image.full}
    
//   ) 
//  }
//  ))
//  }

  return (
    <div className="App">
      <Header/>
      <Scoreboard score={{score:score,bestScore:bestScore}}/>
      <div className='gameboard'>
      {list}
      </div>
     
    </div>
  );
}

export default App;