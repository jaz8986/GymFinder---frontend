import {Grid, Button} from 'semantic-ui-react'
import React, {useState} from 'react'
import { useHistory } from 'react-router-dom'

function AddANewGym({ onGymFormSubmit }) {

    const initialData = {
        name: '',
        address: '',
        image: ''
    }

    const [formData, setFormData] = useState(initialData)

    function handleChange(e) {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    let history = useHistory();

    function handleSubmit (e) {
        e.preventDefault();
        fetch('/gyms/new', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        })
        .then(res => res.json())
        .then((newGym) => onGymFormSubmit(newGym))
        //
        .then(setFormData(initialData))
        history.push('/')
    }
    return(
        <div>
            <h1 style={{textAlign:'center', color: "white"}} >Have your own gym? Add it the list!</h1>
            <Grid>
                <Grid.Column width={2}></Grid.Column>
                    <Grid.Column width={12}>
                        <form onSubmit={handleSubmit}  class="ui form">
                                <div class="field">
                                    <label style={{color: "white"}} >Your Gym's Name</label>
                                    <div class="ui input">
                                        <input value={formData.name} onChange={handleChange}  name="name" type="text" placeholder="Gym" />
                                    </div>
                                </div>
                                <div class="field">
                                    <label style={{color: "white"}}>Address</label>
                                    <div class="ui input">
                                        <input value={formData.address}onChange={handleChange}  name="address" type="text" placeholder="Address" />
                                    </div>
                                </div>
                                <div class="field">
                                    <label style={{color: "white"}} >Image of Logo/Location</label>
                                    <div class="ui input">
                                        <input value={formData.image} onChange={handleChange} name="image" type="text" placeholder="Image URL" />
                                    </div>
                                </div>
                                <Button type='submit'>Add Gym</Button>
                        </form>
                    </Grid.Column>
                <Grid.Column width={2}></Grid.Column>
            </Grid>
        
        </div>
    )
}
export default AddANewGym