import Card from 'react-bootstrap/Card'
import CardColumns from 'react-bootstrap/CardColumns'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'

export interface LocationListProps {
  locations: ILocation[]
}

const LocationList: React.FC<LocationListProps> = ({ locations }) => {
  return (
    <CardColumns>
      {locations.map((loc, index) => (
        <Card key={index}>
          <Card.Body>
            <Card.Title>{loc.name}</Card.Title>
            <Card.Subtitle className="text-muted">
              {loc.warehouse.name}
            </Card.Subtitle>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>Welcome</ListGroupItem>
            <ListGroupItem>To</ListGroupItem>
            <ListGroupItem>The</ListGroupItem>
            <ListGroupItem>Jungle</ListGroupItem>
          </ListGroup>
        </Card>
      ))}
    </CardColumns>
  )
}

export default LocationList
