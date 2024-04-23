
import React, { useState } from 'react';
import './App.css';
import UseContext from './Components/UseContext';


//creating context
export const ToggleTheme = React.createContext()

function App() {

  const [state,setState] = useState(true)

  const handleToggle = ()=>{
    setState(state=>!state)
  }

  return (
    //providing the context using .provider
    <ToggleTheme.Provider value={state}>
      <button onClick={handleToggle}>Toggle</button>
      <UseContext />
    </ToggleTheme.Provider>
  );
}

export default App;


