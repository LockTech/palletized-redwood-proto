import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Tooltip from 'react-bootstrap/Tooltip'
import { BsArchive, BsClock } from 'react-icons/bs'

import DashLayout from 'src/layouts/DashLayout/DashLayout'
import ActiveOrderCountCell from 'src/components/ActiveOrderCountCell'
import UpcomingOrderCountCell from 'src/components/UpcomingOrderCountCell'

import DashTileCard from './components/DashTileCard/DashTileCard'

const renderActiveOrderTooltip = (props) => (
  <Tooltip id="header-tooltip" {...props}>
    The number of active <strong>Orders</strong> which have{' '}
    <strong>Pallets</strong> located at this warehouse.
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
      <Row>
        <Col>
          <h1>Dashboard</h1>
          <p className="text-muted">
            Get an overview of the <strong>Jorbs</strong>,{' '}
            <strong>Orders</strong>, and <strong>Pallets</strong> of Charleston.
          </p>
        </Col>
      </Row>
      <Row>
        <Col sm={12} md={6} className="mb-3 mb-md-0">
          <DashTileCard
            icon={(size) => <BsArchive className="text-primary" size={size} />}
            text={
              <ActiveOrderCountCell warehouseId="064b12ba-468d-4c29-b852-b1a5ced654c0" />
            }
            title={'No. of Active Orders'}
            toolTip={renderActiveOrderTooltip}
          />
        </Col>
        <Col sm={12} md={6} className="mb-3 mb-md-0">
          <DashTileCard
            icon={(size) => <BsClock className="text-secondary" size={size} />}
            text={
              <UpcomingOrderCountCell warehouseId="064b12ba-468d-4c29-b852-b1a5ced654c0" />
            }
            title={'Upcoming Deliveries'}
            toolTip={renderUpcomingOrderTooltip}
          />
        </Col>
      </Row>
    </DashLayout>
  )
}

export default DashboardPage
