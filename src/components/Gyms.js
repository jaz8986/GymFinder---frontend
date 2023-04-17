import GymCard from "./GymCard"
import { Card } from "semantic-ui-react"

function Gyms({ gyms }) {

    const gymCards = gyms.map((g) => <GymCard key={g.id} name={g.name} address={g.address} image={g.image} rating={g.rating} />)

return (
        <Card.Group itemsPerRow={3}>
            {gymCards}
        </Card.Group>
    )
}

export default Gyms