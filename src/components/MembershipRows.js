function MembershipRows({gym, tier, name, email, phone, attached_member}) {
    return (
      <tr className="table-row">
          <td className="gym">{gym}</td>
          <td className="tier">{tier}</td>
          <td className="name">{name}</td>
          <td className="email">{email}</td>
          <td className="phone">{phone}</td>
          <td className="additional-members">{attached_member}</td>
      </tr>
    )
  }
  
  export default MembershipRows