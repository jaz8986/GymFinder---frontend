import { Card, CardContent, Icon, Image } from 'semantic-ui-react'

function GymCard() {
    return (
        <Card>
        <Image src='' wrapped ui={true} />
        <Card.Content>
          <Card.Header>Gym Name</Card.Header>
          <Card.Meta>
            <span className='rating'></span>
            Rated: Rating
          </Card.Meta>
          <Card.Description>
            Address
          </Card.Description>
        </Card.Content>
      </Card>
    ) 
}

export default GymCard