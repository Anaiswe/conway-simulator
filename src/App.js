// App.js
import React from 'react';
import './App.css';
import Footer from './Containers/Footer/Footer/Footer';
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
        <Controls
          running={running}
          handleStartStopClick={handleStartStopClick}
          handleClearClick={handleClearClick}
        />
        <GameContainer
          grid={grid}
          handleCellClick={handleCellClick}
          gameContainerColor={gameContainerColor}
        />
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default App;
