import { routes } from '@redwoodjs/router'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Tooltip from 'react-bootstrap/Tooltip'
import { BsArchive, BsClock } from 'react-icons/bs'

import DashLayout from 'src/layouts/DashLayout/DashLayout'
import ActiveOrderCountCell from 'src/components/ActiveOrderCountCell'
import UpcomingOrderCountCell from 'src/components/UpcomingOrderCountCell'

import DashTileCard from './components/DashTileCard/DashTileCard'
import Container from 'react-bootstrap/esm/Container'

const renderActiveOrderTooltip = (props) => (
  <Tooltip id="header-tooltip" {...props}>
    The number of open Orders which have Pallets located in this warehouse.
  </Tooltip>
)
const renderUpcomingOrderTooltip = (props) => (
  <Tooltip id="header-tooltip" {...props}>
    The number of Orders with ship-dates within the next seven (7) days.
  </Tooltip>
)

const DashboardPage = () => {
  return (
    <DashLayout>
      <Container className="palletized-container">
        <Row>
          <Col>
            <h1>Dashboard</h1>
            <p className="text-muted">
              A quick overview of the Jobs, Orders, and Pallets at:{' '}
              <strong>Charleston</strong>
            </p>
          </Col>
        </Row>
        <Row>
          <Col sm={12} md={6} className="mb-3 mb-md-0">
            <DashTileCard
              footer={{
                text: 'Active Orders',
                to: routes.warehouses(),
              }}
              icon={(size) => (
                <BsArchive className="text-primary" size={size} />
              )}
              header={'Active Orders'}
              headerTooltip={renderActiveOrderTooltip}
            >
              <ActiveOrderCountCell warehouseId="064b12ba-468d-4c29-b852-b1a5ced654c0" />
            </DashTileCard>
          </Col>
          <Col sm={12} md={6} className="mb-3 mb-md-0">
            <DashTileCard
              footer={{
                text: 'Upcoming Deliveries',
                to: routes.warehouses(),
              }}
              icon={(size) => (
                <BsClock className="text-secondary" size={size} />
              )}
              header={'Upcoming Deliveries'}
              headerTooltip={renderUpcomingOrderTooltip}
            >
              <UpcomingOrderCountCell warehouseId="064b12ba-468d-4c29-b852-b1a5ced654c0" />
            </DashTileCard>
          </Col>
        </Row>
      </Container>
    </DashLayout>
  )
}

export default DashboardPage
