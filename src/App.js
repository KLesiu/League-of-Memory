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
  console.log(pickedChamp)
  
  if(pickedChamp.includes(champ)){
    
    setScore(()=>0)
    setPickedChamp(()=>[])
    return console.log('powtórka')
  }
  change()
    setPickedChamp((prev)=>[...prev,champ])
    setScore((prev)=>prev+1)
  
  
  
}
useEffect(()=>{
  for(let i=0;i<pickedChamp.length;i++){
    if(pickedChamp.includes(pickedChamp[i],pickedChamp.indexOf[pickedChamp[i]]+1)) console.log('zle')
  }
},[pickedChamp])
  return (
    <div className="App">
      <Header/>
      <Scoreboard score={score}/>
      <div  className='gameboard'>
      {list}
      
   
      </div>
     
    </div>
  );
}

export default App;