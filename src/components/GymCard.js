import { Card, Image } from 'semantic-ui-react'
import React from'react'

function GymCard({name, address, image, rating}) {

    return (
        <Card>
        <Image src={image} wrapped ui={true} />
        <Card.Content>
          <Card.Header>{name}</Card.Header>
          <Card.Meta>
            <span className='rating'></span>
            Rated: {rating}/5
          </Card.Meta>
          <Card.Description>
            {address}
          </Card.Description>
        </Card.Content>
      </Card>
    ) 
}

export default GymCard