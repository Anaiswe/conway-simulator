import "./gameContainer.css"

const GameContainer = ({ grid, handleCellClick, gameContainerColor }) => {

    const generateRandomColor = () => {
      return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    };
  
    return (
      <div className='game-container' style={{ background: gameContainerColor }}>
        <div className="grid">
          {grid.map((row, i) =>
            row.map((cell, j) => (
              <div
                key={`${i}-${j}`}
                className={`cell ${cell ? 'alive' : ''}`}
                onClick={() => handleCellClick(i, j)}
                style={{ backgroundColor: cell ? generateRandomColor() : '' }}
              />
            ))
          )}
        </div>
      </div>
    );
  };

  export default GameContainer;