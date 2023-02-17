import React from 'react'
import MembershipRows from './MembershipRows'

function ViewMemberships ({memberships, setMemberships}) {
    

    function deleteMembership (id) {
        fetch(`/memberships/${id}`, { method: 'DELETE' })
        .then(() => handleDelete(id))
    }

    function handleDelete (id) {
        const updated = memberships.filter((m) => m.id !== id);
        setMemberships(updated)
    }
   
     
    const membersRows = memberships.map((m) => <MembershipRows mID={m.id} gym={m.gym_id} tier={m.tier_id} name={m.name} email={m.email} phone={m.phone} deleteMembership={deleteMembership}/>)

    return (
        <div style={{disply: "flex", justifyContent: "center", alignItems: "center" }}>
            <table style={{color: "white", textAlign: "center"}} >
            <tbody>
                <tr>
                <th>
                    <h3 className="gym-name">Gym</h3>
                </th>
                <th>
                    <h3 className="tier">Tier</h3>
                </th>
                <th>
                    <h3 className="name">Name</h3>
                </th>
                <th>
                    <h3 className="email">Email</h3>
                </th>
                <th>
                    <h3 className="phone">Phone Number</h3>
                </th>
                </tr>
                {membersRows}
            </tbody>
            </table>
        </div>
    )
}

export default ViewMemberships;