import React, {useState, useEffect} from 'react'
import 'semantic-ui-css/semantic.min.css'
import Header from "./Header"
import Gyms from "./Gyms"
import SignUpForm from './SignUpForm'
import EditMembership from './EditMembership'
import ViewMemberships from './ViewMemberships'
import AddANewGym from './AddANewGym'
import { Switch, Route } from 'react-router-dom' 

function App() {

  const [memberships, setMemberships] = useState([])
  const [gyms, setGyms] = useState([])



    useEffect(()=> {
        fetch("/memberships")
            .then(res => res.json())
            .then(setMemberships)
    },[])

    useEffect(() => {
      fetch("/gyms")
          .then((res) => res.json())
          .then((newGyms) => setGyms(newGyms))
     }, [])



  function onFormSubmit (newMembership) {
    setMemberships([...memberships, newMembership])
  }

  function onPatch (updated) {
    const updatedArr = memberships.map((m) => m.id === updated.id? updated : m)
    setMemberships(updatedArr)
  }

  function onGymFormSubmit (newGym) {
    setGyms([...gyms, newGym])
  }

  return (
    <div style={{backgroundColor: "black"}} >
      <Header/> 
      <Switch>

        <Route exact path= "/" >
          <Gyms gyms={gyms} />
        </Route>

        <Route exact path= "/gyms/new">
          <AddANewGym onGymFormSubmit={onGymFormSubmit}/>
        </Route>

        <Route exact path= "/memberships">
          <ViewMemberships memberships={memberships} setMemberships={setMemberships}/>
        </Route>

        <Route path= "/memberships/new">
          <SignUpForm onFormSubmit={onFormSubmit}/>
        </Route>

        <Route  path="/memberships/:id/edit" >
          <EditMembership onPatch={onPatch} />
        </Route>

      </Switch>
    </div>
  );
}

export default App;
