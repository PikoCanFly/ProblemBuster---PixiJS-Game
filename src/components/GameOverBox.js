import React, { useContext, useEffect } from 'react';

import { Container, Text, Graphics, useApp } from "@pixi/react";
import { gameOverContext, startGameContext } from './Game';


function GameOverBox({setStartGame, stageWidth}) {


  const restartGame = useContext(startGameContext);
  // const gameOver = useContext(gameOverContext);
 const startGame = () => {
  setStartGame(false); 


}

 useEffect(() => {
  const handleKeyDown = (event) => {
    startGame();
  };

  window.addEventListener('keydown', handleKeyDown);
  window.addEventListener('click', handleKeyDown);
  window.addEventListener('touchstart', handleKeyDown);

  return () => {
    window.removeEventListener('keydown', handleKeyDown);
    window.removeEventListener('click', handleKeyDown);
    window.removeEventListener('touchstart', handleKeyDown);


  };
}, []); // Empty dependency array to ensure the effect runs only once
const smallerScreen = stageWidth <= 768;
const app = useApp()
  
    return (
      <Container>

        <Text 
        text= "Game Over"
        x={app.screen.width/2 }
        y={app.screen.width/2}
        anchor={0.5}
        style={
           {
              align: 'center',
              fontFamily: '"Source Sans Pro", Helvetica, sans-serif',
              fontSize: smallerScreen? 30:60,
              fontWeight: '400',
              fill: ['#ffffff', '#00ff99'], // gradient
              stroke: '#01d27e',
              strokeThickness: 5,
              letterSpacing: 20,
              wordWrap: true,
              wordWrapWidth:smallerScreen? 200 : 440,
            }
          }
        />


      </Container>
    );
  }
  
  export default GameOverBox