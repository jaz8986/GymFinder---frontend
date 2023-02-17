import { Grid, Button } from 'semantic-ui-react'
import React, { useState } from 'react';


function SignUpForm ({ onFormSubmit }) {
    const initialData = {
        gym_id: '',
        tier_id: '',
        name: '',
        phone: '',
        email: ''
    }

    const [formData, setFormData] = useState(initialData)

    function handleChange (e) {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    function handleSubmit (e) {
        e.preventDefault();
        fetch('/memberships', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        })
        .then(res => res.json())
        .then(onFormSubmit)
        .then(setFormData(initialData))
    }

    // value={formData.tier}
    // onChange={handleTierChange}

    return (
        <div>
            <Grid>
                <Grid.Column width={2}></Grid.Column>
                    <Grid.Column width={12}>
                        <form onSubmit={handleSubmit}  class="ui form">
                                <div class="field">
                                    <label style={{color: "white"}} >Gym</label>
                                    <div class="ui input">
                                        <input value={formData.gym_id} onChange={handleChange} name="gym_id" type="number" placeholder="Gym" />
                                    </div>
                                </div>
                                <div class="field">
                                    <label style={{color: "white"}}>Tier</label>
                                    <div class="ui input">
                                        <input value={formData.tier_id} onChange={handleChange} name="tier_id" type="number" placeholder="Tier" />
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
                                <Button type='submit'>Finalize Membership</Button>
                        </form>
                    </Grid.Column>
                <Grid.Column width={2}></Grid.Column>
            </Grid>
        </div>
    )
}

export default SignUpForm;