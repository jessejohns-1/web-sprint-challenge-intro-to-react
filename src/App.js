import Characters from './components/Character';
import React, {useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import {MySecrets} from './components/api';
import Clock from './components/clock';




const App = () => {



  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [characters, setCharacters] = useState([])
  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  //fetching my api using axios from imported source under components/api

  useEffect(() => {
    axios.get(`${MySecrets}`)
    .then(res => {
      //setting the data inside of my use state
      setCharacters(res.data)
    })
    .catch(err => {
      console.log(err)
    })
}, [])

//this is returning my app with all the content included from characters and clock folder.
  return (
    <div className="App">
      {/* adding my characters data attributes  */}
     <Characters  data={characters} />
     <Clock> </Clock>
    </div>
  );
}

export default App;
