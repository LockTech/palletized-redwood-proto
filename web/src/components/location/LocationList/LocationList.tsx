import { Link, routes } from '@redwoodjs/router'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

import OrderCountCell from 'src/components/order/OrderCountCell/OrderCountCell'
import PalletCountCell from 'src/components/pallet/PalletCountCell/PalletCountCell'

export interface LocationListProps {
  locations: ILocation[]
}

const countContainerClasses = 'd-flex flex-direction-row align-items-center'

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
                <strong>Order Count:&nbsp;</strong>
                <OrderCountCell order={{ pallets: { locationId: loc.id } }} />
              </Card.Text>
              <Card.Text className={countContainerClasses}>
                <strong>Pallet Count:&nbsp;</strong>
                <PalletCountCell pallet={{ locationId: loc.id }} />
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
              <Button
                as={Link}
                block
                to={routes.editLocation({ id: loc.id })}
                variant="outline-secondary"
              >
                Edit
              </Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  )
}

export default LocationList
