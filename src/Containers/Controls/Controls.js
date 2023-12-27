import "./controls.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faStop, faArrowsRotate } from '@fortawesome/free-solid-svg-icons';

import useGameLogic from "../../Functions/GameLogic";

const Controls = ({ running, handleStartStopClick, handleClearClick }) => {
    return (
      <div className="controls">
        <div
          className={`play ${running ? 'running' : ''}`}
          onClick={handleStartStopClick}
        >
          {running ? (
            <>
              <div className='start-stop-clear'>
                <FontAwesomeIcon icon={faStop} />
              </div>
            </>
          ) : (
            <div className='start-stop-clear'>
              <FontAwesomeIcon icon={faPlay} />
            </div>
          )}
        </div>
  
        <div className='refresh' onClick={handleClearClick}>
          <div className="start-stop-clear">
            <FontAwesomeIcon icon={faArrowsRotate} />
          </div>
        </div>
      </div>
    );
  };

  export default Controls;