// App.js
import React from 'react';
import './App.css';
import GameContainer from "./Containers/GameContainer/GameContainer"
import Controls from './Containers/Controls/Controls';
import useGameLogic from './Functions/GameLogic';

const App = () => {
  const {
    grid,
    running,
    handleCellClick,
    handleStartStopClick,
    handleClearClick,
  } = useGameLogic();

  const gameContainerColor = '#000000';

  return (
    <>
      <div className="App">
        <div className='app-container'>
          <div className='app-game-container'>
            <div className="ascii">
              <pre style={{ color: '#ffffff' }}>
                {`
                  ##          ##
                  ##      ##    
                ##############
                ####  ######  ####
                ######################
                ##  ##############   ##  
                ##  ##          ##   ##
                      ####  ####
                `}
              </pre>
            </div>

            <GameContainer
              grid={grid}
              handleCellClick={handleCellClick}
              gameContainerColor={gameContainerColor}
            />

            <div className="ascii">
              <pre style={{ color: '#ffffff' }}>
                {`
                  ##          ##
                  ##      ##    
                ##############
                ####  ######  ####
                ######################
                ##  ##############   ##  
                ##  ##          ##   ##
                      ####  ####
                `}
              </pre>
            </div>
          </div>

          <Controls
            running={running}
            handleStartStopClick={handleStartStopClick}
            handleClearClick={handleClearClick}
          />
        </div>
      </div>
    </>
  );
};

export default App;
