import React, {useState, useEffect} from 'react'
import 'semantic-ui-css/semantic.min.css'
import Header from "./Header"
import Gyms from "./Gyms"
import SignUpForm from './SignUpForm'
import EditMembership from './EditMembership'
import ViewMemberships from './ViewMemberships'
import { Switch, Route } from 'react-router-dom' 


function App() {

  const [memberships, setMemberships] = useState([])

    useEffect(()=> {
        fetch("/memberships")
            .then(res => res.json())
            .then(setMemberships)
    },[])

  function onFormSubmit (newMembership) {
    setMemberships([...memberships, newMembership])
  }

  return (
    <div style={{backgroundColor: "black"}} >
      <Header/> 
      <Switch>

        <Route exact path= "/" >
          <Gyms/>
        </Route>

        <Route exact path= "/memberships">
          <ViewMemberships memberships={memberships} setMemberships={setMemberships}/>
        </Route>

        <Route path= "/memberships/new">
          <SignUpForm onFormSubmit={onFormSubmit}/>
        </Route>

        <Route path= "/memberships/edit">
          <EditMembership/>
        </Route>

      </Switch>
    </div>
  );
}

export default App;
