import { Link } from 'react-router-dom'

function MembershipRows({mID, gym, tier, name, email, phone, attached_member, deleteMembership}) {


  let path = `/memberships/${mID}/edit`

  return (
      <tr style={{textAlign: "center"}} className="table-row">
          <td className="gym">{gym}</td>
          <td className="tier">{tier}</td>
          <td className="name">{name}</td>
          <td className="email">{email}</td>
          <td className="phone">{phone}</td>
          <td className="additional-members">{attached_member}</td>
          <button onClick={()=> deleteMembership(mID)}><i class="trash icon"></i></button>
          <Link to={path} >
            <button type="button" ><i class="edit icon"></i></button>
          </Link>
      </tr>
    )
  }
  
  export default MembershipRows