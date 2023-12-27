import React, { useEffect } from 'react';
import Controls from '../../Controls/Controls';
import "./footer.css";
import useGameLogic from '../../../Functions/GameLogic';

const Footer = () => {
  const { runSimulation } = useGameLogic();

  useEffect(() => {
    const simulationInterval = setInterval(() => {
      runSimulation();
    }, 100);

    return () => {
      clearInterval(simulationInterval);
    };
  }, [runSimulation]);

  return (
    <div className="footer-container">
      <Controls runSimulation={runSimulation} />
      <pre style={{ color: '#ffcc00' }}>
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
  );
};

export default Footer;
