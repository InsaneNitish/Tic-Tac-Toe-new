import { useState } from "react"
import Box from "./box";

let winner =null;

function GameBox(props){

  const [trackClick,setTrackClick] = useState(new Array(9).fill(null));
  const [clicked,setClicked] = useState(new Array(9).fill(false));
  const [boxValue,setBoxValue] = useState("X");

  function handleClick(id){
    const XclickSound = new Audio(props.xTone);
    const OclickSound = new Audio(props.oTone);
    boxValue==="X" ? XclickSound.play() : OclickSound.play();
    if(clicked[id]===true){
      return;
    }
    if(winner!=null){
      return;
    }
    setClicked((prevCliked)=>{
      return [...prevCliked.slice(0,id),true,...prevCliked.slice(id+1)];
    })
    setTrackClick((prevTrack)=>{
      const newTrack = [...prevTrack];
      newTrack[id]=boxValue;
      return newTrack;
    })
    if(boxValue==="X"){
      setBoxValue("O");
    }
    else{
      setBoxValue("X");
    }
  }
  winner = CheckWinner(trackClick);
  if(winner==="X"){
    winner = "Winnner : "+props.players.player1;
  }
  else if(winner==="O"){
    winner= "Winnner : "+props.players.player2;
  }
  else if(winner===null ){
    if(trackClick.some(element => element === null)){
    }
    else{
      winner = "It's Draw";
    }
    
  }


  function CheckWinner(output){
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if(output[a] && output[a] === output[b] && output[a] === output[c]){
        const winnerAudio = new Audio(props.win);
        winnerAudio.play();
        setTimeout(() => {
          winnerAudio.pause();
        }, 10000);
        return output[a];
      }
    }
    return null;
  }

  function replay(){
    setTrackClick(new Array(9).fill(null));
    setClicked(new Array(9).fill(false));
    setBoxValue("X");

  }

  

    return(
      <>
      <h1>{winner}</h1>
      <div className="playerNames">
        <h2>{props.players.player1}<span>(X)</span></h2>
        <h2>{props.players.player2}<span>(O)</span></h2>
      </div>
      <div className='box-wrapper'>
          {trackClick.map((value,index)=>{
             return (<Box handleClick={handleClick} value={value} key={index} id={index}></Box>);
          })}
    </div>
    <div className="gamebtn">
    <button onClick={replay}>Re-Match</button>
    <button onClick={()=>props.newGame()}>New Game</button>
    </div>
    </>
    )
}

export default GameBox