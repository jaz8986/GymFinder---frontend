import React, {useState, useEffect} from 'react'
import MembershipRows from './MembershipRows'

function ViewMemberships () {
    
    const [memberships, setMemberships] = useState([])

    useEffect(()=> {
        fetch("/memberships")
            .then(res => res.json())
            .then(setMemberships)
    },[])

    function deleteMembership (id) {
        fetch(`/memberships/${id}`, { method: 'DELETE' })
        .then(res => res.json())
        .then(() => setMemberships(memberships))
    }

    const 
     
    const membersRows = memberships.map((m) => <MembershipRows id={m.id} gym={m.gym} tier={m.tier} name={m.name} email={m.email} phone={m.phone} attached_member={m.attached_member} deleteMembership={deleteMembership}/>)
    console.log(memberships)
    return (
        <div style={{color: "white", textAlign: "center"}}>
            <table>
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
                <th>
                    <h3 className="attached-members">Additional Members</h3>
                </th>
                </tr>
                {membersRows}
            </tbody>
            </table>
        </div>
    )
}

export default ViewMemberships;