import { useState } from "react"

function Players(props){
    const [playersNames,setPlayersNames] = useState({
        player1: "",
        player2: "",
    });

    function handleChange(e){
        const {name,value} = e.target;
        if(name==="player1"){
            setPlayersNames((prevName)=>{
                return {player1: value,player2: prevName.player2,}
            })
        }
        else if(name==="player2"){
            setPlayersNames((prevName)=>{
                return {player2: value,player1: prevName.player1,}
            })
        }
    }

    return(
        <form onSubmit={(e)=>{e.preventDefault()}}>
            <input onChange={handleChange} type="text" name="player1"  placeholder="Player 1 Name (X)" value={playersNames.player1}/>
            <input onChange={handleChange} type="text" name="player2" placeholder="Player 2 Name (O)" value={playersNames.player2}/>
            <button onClick={()=>props.handlePlayerInput(playersNames)}>Start Game</button>
        </form>
    )
}

export default Players