import React,{useState,useEffect} from 'react';
import './App.css';
import Header from './components/Header';
import Scoreboard from './components/Scoreboard';
import Card from './components/Card';

function App() {
  
  const [score,setScore]=useState(0)
  const [bestScore,setBestScore]=useState(0)
  const [list,setList]=useState([])
  const [start,setStart]=useState(false)
  const [counter,setCounter]=useState(0)
  const [pickedChamp,setPickedChamp]=useState([])
  const [checkPicked,setCheckPick]=useState([])
  const [currentChamp,setCurrentChamp]=useState('')
  
  useEffect(()=>{

    fetch('http://ddragon.leagueoflegends.com/cdn/13.6.1/data/en_US/champion.json').then(res=> res.json()).then((response)=>{
      const dataList=Object.keys(response.data)
      const champions=dataList.map((element)=>{
        return(
          
          <Card image={response.data[element].image.full}  name={element} handleClick={handleClick} />
        )
      })
      setList(champions)
      
    
   
      

     
    }).then(setStart(true))
    
  },[start])
 
  const change=()=>{


    if(counter===0){
      setStart(false)
    }
    setCounter(1)
    
    let currentIndex=[]
    let arr=[]
    for(let i=0;i<163;i++){
      let numb=Math.floor(Math.random()*163)
    
      
        while(currentIndex.includes(numb)){
          numb=Math.floor(Math.random()*163)
      
        }
        currentIndex.push(numb)
      arr.push(list[numb])

    }
    if(arr.includes(undefined)){
     alert('Good luck!')
    }else{
      
     
   const newChampions= arr.map((element=>{
      return(
          
        <Card image={element.props.image} name={element.props.name}   handleClick={handleClick} />
      )
    }))
    
    setList(newChampions)
    
   
    }
    
  }

function handleClick(champ){

  
  change()
  setCurrentChamp(champ)
    setPickedChamp((prev)=>[...prev,champ])
    setScore((prev)=>prev+1)
    
  
  
}
useEffect(()=>{
  if(checkPicked.includes(currentChamp)){
    
    setBestScore(()=>{
      if(bestScore>score) return bestScore
      else if(score===0) return 0
      else return score-1
    }
     )
    setScore(0)
    setList([])
    setPickedChamp([])
    setCurrentChamp('')
    setCheckPick([])
    setStart(false)
    setCounter(0)
  } 
    
  
 setCheckPick(pickedChamp)
 
},[pickedChamp])
  return (
    <div className="App">
      <Header/>
      <Scoreboard bestScore={bestScore} score={score}/>
      <div  className='gameboard'>
      {list}
      
   
      </div>
     
    </div>
  );
}

export default App;