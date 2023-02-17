import GymCard from "./GymCard"

function Gyms({ gyms }) {

    const gymCards = gyms.map((g) => <GymCard key={g.id} name={g.name} address={g.address} image={g.image} rating={g.rating} />)

return (
        <div>
            {gymCards}
        </div>
    )
}

export default Gyms