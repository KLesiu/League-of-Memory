import React,{useState,useEffect} from 'react';
import './App.css';
import Header from './components/Header';
import Scoreboard from './components/Scoreboard';
import Card from './components/Card';
import Levels from './components/Levels';
import uniqid from 'uniqid'

function App() {
  
  const [score,setScore]=useState(0)
  const [bestScore,setBestScore]=useState(0)
  const [list,setList]=useState([])
  const [start,setStart]=useState(false)
  const [counter,setCounter]=useState(0)
  const [pickedChamp,setPickedChamp]=useState([])
  const [checkPicked,setCheckPick]=useState([])
  const [currentChamp,setCurrentChamp]=useState('')
  const [begin,setBegin]=useState(0)
  const [level,setLevel]=useState(1)
  const [allChamp,setAllChamp]=useState([])



  const getLevel=()=>{
    setBegin(2)
    console.log(list)
    
//     let arrayChamp;
   
// if(level===1){
//   arrayChamp=allChamp.slice(0,10)
//   setList(arrayChamp)
//  arrayChamp.map((element)=>{
//   return(
       
//     <Card key={uniqid()} image={element.props.image} name={element.props.name}   handleClick={handleClick} />
//   )
//  })
// }
  }
  useEffect(()=>{

    fetch('http://ddragon.leagueoflegends.com/cdn/13.6.1/data/en_US/champion.json').then(res=> res.json()).then((response)=>{
      const dataList=Object.keys(response.data)
      const champions=dataList.map((element)=>{
        return(
          
          <Card key={uniqid()} image={response.data[element].image.full}  name={element} handleClick={handleClick} />
        )
      })
      setList(champions.slice(0,10))
      setAllChamp(champions)
      
    
   
      

     
    }).then(setStart(true))
    
  },[start])
 
  const change=()=>{


    if(counter===0){
      setStart(false)
    }
    
    
    let currentIndex=[]
    let arr=[]
    if(level===1){
      for(let i=0;i<10;i++){
        let numb=Math.floor(Math.random()*10)


        while(currentIndex.includes(numb)){
          numb=Math.floor(Math.random()*10)

        }
        currentIndex.push(numb)
        arr.push(list[numb])
      }
    } 
    

    else if(list.length===163){
      for(let i=0;i<163;i++){
        let numb=Math.floor(Math.random()*163)
      
        
          while(currentIndex.includes(numb)){
            numb=Math.floor(Math.random()*163)
        
          }
          currentIndex.push(numb)
        arr.push(list[numb])
  
      }
    }
    
    if(arr.includes(undefined)){
     console.log('undefineddd')
    }else{
      
     console.log(arr)
   const newChampions= arr.map((element=>{
      return(
          
        <Card key={uniqid()} image={element.props.image} name={element.props.name}   handleClick={handleClick} />
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
    // setList([])
    setPickedChamp([])
    setCurrentChamp('')
    setCheckPick([])
    setCounter(0)
  } 
    
  
 setCheckPick(pickedChamp)
 
},[pickedChamp])

if(begin===0){
  return (
    <div className="App">
      <Header/>
      <Scoreboard bestScore={bestScore} score={score}/>
      <div  className='gameboard'>
     
      <button onClick={()=>{
        setBegin(1)
        setCounter(1)
      }}>START</button>
   
      </div>
     
    </div>
  );
}
else if(begin===1){
  return (
    <div className="App">
      <Header/>
      <Scoreboard bestScore={bestScore} score={score}/>
      <div  className='gameboard'>
      <Levels  lvl={level} />
      <button onClick={getLevel} className='switchLevel'>GO!</button>
      </div>
     
    </div>
  );
}
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