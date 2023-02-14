import React from 'react'
import 'semantic-ui-css/semantic.min.css'
import Header from "./Header"
import Gyms from "./Gyms"
import { Switch } from 'react-router-dom' 


function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Gyms/>
      </Switch> 
        
    </div>
  );
}

export default App;
