import React,{useState,useEffect} from 'react';
import './App.css';
import Header from './components/Header';
import Scoreboard from './components/Scoreboard';
import Card from './components/Card';
import Levels from './components/Levels';
import Win from './components/Win';
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
    setBegin(3)
 

  }
  useEffect(()=>{

    fetch('http://ddragon.leagueoflegends.com/cdn/13.6.1/data/en_US/champion.json').then(res=> res.json()).then((response)=>{
      const dataList=Object.keys(response.data)
      const champions=dataList.map((element)=>{
        return(
          
          <Card key={uniqid()} image={response.data[element].image.full}  name={element} handleClick={handleClick} />
        )
      })
      if(level===1) setList(champions.slice(0,10))
      else if(level===2) setList(champions.slice(0,30))
      else if(level===3) setList(champions.slice(0,60))
      else if(level===4) setList(champions)

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
   else if(level===2){
      const helpArray=allChamp.slice(0,30)
      for(let i=0;i<30;i++){
        let numb=Math.floor(Math.random()*30)


        while(currentIndex.includes(numb)){
          numb=Math.floor(Math.random()*30)

        }
        currentIndex.push(numb)
        arr.push(helpArray[numb])
      }
    } 
   else if(level===3){
      const helpArray=allChamp.slice(0,60)
      for(let i=0;i<60;i++){
        let numb=Math.floor(Math.random()*60)


        while(currentIndex.includes(numb)){
          numb=Math.floor(Math.random()*60)

        }
        currentIndex.push(numb)
        arr.push(helpArray[numb])
      }
    } 
    

    else if(level===4){
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
      return
    }else{
      
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
    setPickedChamp([])
    setCurrentChamp('')
    setCheckPick([])
    
  } 
    
  
 setCheckPick(pickedChamp)
 
},[pickedChamp])
useEffect(()=>{
if(pickedChamp.length===10&&level===1){
 
  setBegin(1)
  setBestScore(0)
  setScore(0)
  setList([])
  setCurrentChamp('')
  setCheckPick([])
  setPickedChamp([])
  setLevel(2)
  setStart(false)
}
else if(pickedChamp.length===30&&level===2){
  setBegin(1)
  setBestScore(0)
  setScore(0)
  setList([])
  setCurrentChamp('')
  setPickedChamp([])
  setCheckPick([])
  setLevel(3)
  setStart(false)
}
else if(pickedChamp.length===60&&level===3){
  setBegin(1)
  setBestScore(0)
  setScore(0)
  setList([])
  setCurrentChamp('')
  setPickedChamp([])
  setCheckPick([])
  setLevel(4)
  setStart(false)
}
else if(pickedChamp.length===163&&level===4){
  setBegin(2)
  setBestScore(0)
  setScore(0)
  setList([])
  setCurrentChamp('')
  setPickedChamp([])
  setCheckPick([])
  setLevel(1)
  setStart(false)
}
},[pickedChamp])
if(begin===0){
  return (
    <div className="App">
      <Header/>
      <Scoreboard bestScore={bestScore} score={score}/>
      <div  className='gameboard'>
     
      <button className='buttonStart' onClick={()=>{
        setBegin(1)
        setCounter(1)
      }}>START</button>
   
      </div>
     <footer>League of Memory was created under Riot Games' "Legal Jibber Jabber" policy using assets owned by Riot Games.  Riot Games does not endorse or sponsor this project.</footer>
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
      <footer>League of Memory was created under Riot Games' "Legal Jibber Jabber" policy using assets owned by Riot Games.  Riot Games does not endorse or sponsor this project.</footer>
    </div>
  );
}
else if(begin===2){
 return(
  <div className='App'>
    <Header/>
    <Scoreboard />
    <Win />
    <footer>League of Memory was created under Riot Games' "Legal Jibber Jabber" policy using assets owned by Riot Games.  Riot Games does not endorse or sponsor this project.</footer>
  </div>
 )
}
return (
  <div className="App">
    <Header/>
    <Scoreboard bestScore={bestScore} score={score}/>
    <div  className='gameboard'>
   
   {list}
 
    </div>
    <footer>League of Memory was created under Riot Games' "Legal Jibber Jabber" policy using assets owned by Riot Games.  Riot Games does not endorse or sponsor this project.</footer>
  </div>
);
 
}

export default App;