import { useState } from 'react'
import reactLogo from './assets/react.svg'
import logo from "./assets/tic-tac-toe.png"
import './App.css'
import Header from './header'
import GameBox from './gameBox'
import Footer from './footer'
import Players from './players'
import oTone from "./Audio/oTone.mp3"
import win from "./Audio/win.mp3"
import xTone from "./Audio/xTone.mp3"
import music from "./Audio/music.mp3"


function App() {

  const [players,setPlayers]=useState({});
  const [gotInput,setgotInput] = useState(false);
  const gameMusic = new Audio(music);

  function  handlePlayerInput(playerNames){
    setPlayers(playerNames);
    setgotInput(true);
    gameMusic.play();
  }

  function newGame(){
    setPlayers({});
    setgotInput(false);
    gameMusic.pause();
    return;
  }





  return (
    <>
    <Header logoUrl={logo}/>
    {!gotInput && <Players handlePlayerInput={handlePlayerInput}/>}
    {gotInput &&<GameBox players={players} newGame={newGame} oTone={oTone} xTone={xTone} music={music} win={win}/>}
    <Footer/>
    </>
  )
}

export default App
