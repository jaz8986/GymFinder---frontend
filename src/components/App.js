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

    // const gymIDs = gyms.map((gym) => gym.id)
    
    // if gym.id matches membership.gym_id, replace membership.gym_id with gym.name

    // const viewMemberships = memberships.forEach((membership) => {
    //   const membID = membership.gym_id
    //   if (gymIDs.includes(membID)) {
    //     const name = gyms[membID].name
    //     membership.gym_id = name
    //     return membership
    //   } else {
    //     return membership
    //   }

      // const membGymId = membership.gym_id //=> 3
      // // console.log(`membGymId: ${membGymId}`)
      // const gymidArr = gyms.filter((gym) => gym.id === membGymId)
      // const gymID = gymidArr[0]
      // // console.log(`gymID: ${gymID}`)
      //   if (gymIDs.includes(gymID)) {
      //     membership["gym_id"] = `${gyms[gymID.id].name}`
      //     return membership
      //   }
      //   else {
      //     return membership
      //   }
    // } )

  // console.log(viewMemberships)



  function onFormSubmit (newMembership) {
    setMemberships([...memberships, newMembership])
  }

  return (
    <div style={{backgroundColor: "black"}} >
      <Header/> 
      <Switch>

        <Route exact path= "/" >
          <Gyms gyms={gyms} />
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
