import { Link, routes } from '@redwoodjs/router'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

import OrderCountCell from 'src/components/order/OrderCountCell'
import PalletCountCell from 'src/components/pallet/PalletCountCell'

export interface LocationListProps {
  locations: ILocation[]
}

const countContainerClasses =
  'd-flex flex-direction-row justify-content-between'
const countCountClasses = 'text-monospace'

const LocationList: React.FC<LocationListProps> = ({ locations }) => {
  return (
    <Row className="flex-wrap">
      {locations.map((loc, index) => (
        <Col className="mb-4" sm={12} md={4} key={index}>
          <Card>
            <Card.Body>
              <Card.Title>{loc.name}</Card.Title>
              <Card.Subtitle className="mb-3 text-muted">
                {loc.warehouse.name}
              </Card.Subtitle>
              <Card.Text className={countContainerClasses}>
                <strong>Order Count:</strong>
                <span className={countCountClasses}>
                  <OrderCountCell locationId={loc.id} />
                </span>
              </Card.Text>
              <Card.Text className={countContainerClasses}>
                <strong>Pallet Count:</strong>
                <span className={countCountClasses}>
                  <PalletCountCell pallet={{ locationId: loc.id }} />
                </span>
              </Card.Text>
              <Button
                as={Link}
                block
                to={routes.location({
                  id: loc.id,
                  warehouse: loc.warehouse.id,
                })}
                variant="outline-primary"
              >
                Details
              </Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  )
}

export default LocationList
