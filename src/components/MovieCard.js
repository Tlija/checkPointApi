import React from 'react'
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';


export const MovieCard = ({el}) => {
  const{address:{street}}=el
  return (
    <div>
       <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{el.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{el.username}</Card.Subtitle>
        <Card.Text>
          {el.email}
        </Card.Text>
        <Card.Text>
          {el.phone}
        </Card.Text>
        <Card.Text>
          {street}
        </Card.Text>
        <Card.Link href="#">Click Here</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
    </div>
  )
}
