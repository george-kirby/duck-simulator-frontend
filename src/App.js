import React, { useState, useEffect } from 'react';
import './App.css';
import DuckContainer from './containers/DuckContainer';
import API from './adapters/API'

function App() {

  const [ ducks, setDucks] = useState([])
  const [ area, setAreas] = useState([])
  const [ currentDuck, setCurrentDuck] = useState(null)
  const [ currentArea, setCurrentArea] = useState(null)

  useEffect(() => {
    API.getDucks().then(setDucks)
    API.getAreas().then(setAreas)
   }, []);

  return (
    <div>
      Hello
      <DuckContainer {...{ducks, currentDuck}}/>
    </div>
  );
}

export default App;
