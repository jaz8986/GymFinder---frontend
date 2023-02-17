import {Grid, Button} from 'semantic-ui-react'
import { useParams, useHistory } from 'react-router-dom';
import React, {useEffect, useState} from 'react'

function EditMembership ({onPatch}) {

    const initialData = {
        gym_id: '',
        tier_id: '',
        name: '',
        email: '',
        phone: '',
    }

    const [formData, setFormData] = useState(initialData)

    let { id } = useParams()

    useEffect(()=> {
        fetch(`/memberships/${id}`)
            .then(res => res.json())
            .then(setFormData)
    },[id])

    function handleChange (e) {
        const {name, value} = e.target
        setFormData({...formData, [name]: value})
    }

    let history = useHistory();

    function handlePatch(e) {
        e.preventDefault();
        fetch(`/memberships/${id}`, {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          })
            .then(res => res.json())
            .then((res) => onPatch(res))
        history.push('/memberships')
    }

    return (
        <div>
        <Grid>
            <Grid.Column width={2}></Grid.Column>
                <Grid.Column width={12}>
                    <form onSubmit={handlePatch} class="ui form">
                            <div class="field">
                                <label style={{color: "white"}} >Gym</label>
                                <div class="ui input">
                                    <input value={formData.gym_id}  name="gym_id" type="text" placeholder="Gym" />
                                </div>
                            </div>
                            <div class="field">
                                <label style={{color: "white"}}>Tier</label>
                                <div class="ui input">
                                    <input value={formData.tier_id}  name="tier_id" type="text" placeholder="Tier" />
                                </div>
                            </div>
                            <div class="field">
                                <label style={{color: "white"}} >Your Name</label>
                                <div class="ui input">
                                    <input name="name" value={formData.name} onChange={handleChange} type="text" placeholder="Name" />
                                </div>
                            </div>
                            <div class="field">
                                <label style={{color: "white"}}>Phone Number</label>
                                <div class="ui input">
                                    <input name='phone' value={formData.phone} onChange={handleChange} type="text" placeholder="Phone Number" />
                                </div>
                            </div>
                            <div class="field">
                                <label style={{color: "white"}} >Email</label>
                                <div class="ui input">
                                    <input name="email" value={formData.email} onChange={handleChange} type="text" placeholder="Email" />
                                </div>
                            </div>
                            <Button type='submit'>Edit Membership</Button>
                    </form>
                </Grid.Column>
            <Grid.Column width={2}></Grid.Column>
        </Grid>
    </div>
    )
}

export default EditMembership;