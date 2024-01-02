// GameLogic.js

import { useState, useCallback, useRef, useEffect } from 'react';

//nombre de lignes et de colonnes dans la grille
const numRows = 50;
const numCols = 30;

//génère une grille vide de dimensions numRows x numCols avec des cellules initialisées aléatoiremen
// ...
const generateEmptyGrid = () => {
  return Array.from({ length: numRows }, () =>
    Array.from({ length: numCols }, () => Math.random() > 0.7 ? 1 : 0)
  );
};
// ...


//crée une copie profonde de la grille passée en argument
const copyGrid = (grid) => {
  return grid.map(row => [...row]);
};

const useGameLogic = () => {
  
  const [grid, setGrid] = useState(() => generateEmptyGrid());
  const [running, setRunning] = useState(false);

  const runningRef = useRef(running);
  runningRef.current = running;

  const runSimulation = useCallback(() => {
    if (!runningRef.current) return;

    setGrid((prevGrid) => {
      const newGrid = copyGrid(prevGrid);

      for (let i = 0; i < numRows; i++) {
        for (let j = 0; j < numCols; j++) {
          const neighbors =
            (prevGrid[i - 1]?.[j - 1] || 0) +
            (prevGrid[i - 1]?.[j] || 0) +
            (prevGrid[i - 1]?.[j + 1] || 0) +
            (prevGrid[i]?.[j - 1] || 0) +
            (prevGrid[i]?.[j + 1] || 0) +
            (prevGrid[i + 1]?.[j - 1] || 0) +
            (prevGrid[i + 1]?.[j] || 0) +
            (prevGrid[i + 1]?.[j + 1] || 0);

          if (prevGrid[i][j] === 1) {
            newGrid[i][j] = neighbors === 2 || neighbors === 3 ? 1 : 0;
          } else {
            newGrid[i][j] = neighbors === 3 ? 1 : 0;
          }
        }
      }

      return newGrid;
    });

    setTimeout(runSimulation, 100);
  }, []);

  const handleCellClick = (row, col) => {
    const newGrid = copyGrid(grid);
    newGrid[row][col] = grid[row][col] === 1 ? 0 : 1;
    setGrid(newGrid);
  };

  const handleStartStopClick = () => {
    setRunning(!running);
    if (!running) {
      runningRef.current = true;
      runSimulation();
    }
  };

  const handleClearClick = () => {
    setGrid(generateEmptyGrid());
    setRunning(false);
  };

  useEffect(() => {
   
  }, [grid]);

  

  return {
    grid,
    running,
    handleCellClick,
    handleStartStopClick,
    handleClearClick,
    runSimulation,
  };
};

export default useGameLogic;
