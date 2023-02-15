import React from 'react'
import 'semantic-ui-css/semantic.min.css'
import Header from "./Header"
import Gyms from "./Gyms"
import SignUpForm from './SignUpForm'
import EditMembership from './EditMembership'
import ViewMemberships from './ViewMemberships'
import { Switch, Route } from 'react-router-dom' 


function App() {
  return (
    <div style={{backgroundColor: "black"}} >
      <Header/> 
      <Switch>

        <Route path= "/gyms" >
          <Gyms/>
        </Route>

        <Route path= "/memberships">
          <ViewMemberships/>
        </Route>

        <Route path= "gyms/:id/memberships/new">
          <SignUpForm/>
        </Route>

        <Route path= "membership/edit">
          <EditMembership/>
        </Route>

      </Switch>
    </div>
  );
}

export default App;
