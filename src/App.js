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
          
          <Card image={response.data[element].image.full} change={change} name={element} />
        )
      })
      setList(champions)
   
      

     
    })
    
  },[])
  const change=()=>{
 
    let currentIndex=[]
    let arr=[]
    for(let i=0;i<163;i++){
      let numb=Math.floor(Math.random()*163)
      currentIndex.push(numb)
      if(currentIndex.includes(numb)){
        while(currentIndex.includes(numb)){
          numb=Math.floor(Math.random()*163)
      
        }
      }
      arr.push(numb)

    }
    console.log(arr)
    
  }

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