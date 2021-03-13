import Card from 'react-bootstrap/Card'
import CardColumns from 'react-bootstrap/CardColumns'

import LocationDeleteCell from 'src/components/location/LocationDeleteCell'

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
            <Card.Subtitle className="mb-3 text-muted">
              {loc.warehouse.name}
            </Card.Subtitle>
            <LocationDeleteCell id={loc.id} warehouseId={loc.warehouse.id} />
          </Card.Body>
        </Card>
      ))}
    </CardColumns>
  )
}

export default LocationList
