import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

export interface LocationListProps {
  locations: ILocation[]
}

const LocationList: React.FC<LocationListProps> = ({ locations }) => {
  return (
    <Row>
      {locations.map((loc, index) => (
        <Col key={index} lg={4} md={6}>
          <Card className="mb-3">
            <Card.Body>
              <Card.Title>{loc.name}</Card.Title>
              <Card.Subtitle className="text-muted">
                {loc.warehouse.name}
              </Card.Subtitle>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  )
}

export default LocationList
