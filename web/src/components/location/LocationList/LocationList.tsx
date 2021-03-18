import { Link, routes } from '@redwoodjs/router'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import CardColumns from 'react-bootstrap/CardColumns'

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
    <CardColumns>
      {locations.map((loc, index) => (
        <Card key={index}>
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
      ))}
    </CardColumns>
  )
}

export default LocationList
