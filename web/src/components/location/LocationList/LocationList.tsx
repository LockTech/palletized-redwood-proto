import Card from 'react-bootstrap/Card'
import CardColumns from 'react-bootstrap/CardColumns'

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
        </Card>
      ))}
    </CardColumns>
  )
}

export default LocationList
