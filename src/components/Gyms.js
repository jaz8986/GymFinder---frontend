import React, {useEffect, useState} from 'react'
import GymCard from "./GymCard"

function Gyms() {

   const [gyms, setGyms] = useState([])

   useEffect(() => {
    fetch("/gyms")
        .then((res) => res.json())
        .then((newGyms) => setGyms(newGyms))
   }, [])

    const gymCards = gyms.map((g) => <GymCard key={g.id} name={g.name} address={g.address} image={g.image} rating={g.rating} />)

return (
        <div>
            {gymCards}
        </div>
    )
}

export default Gyms