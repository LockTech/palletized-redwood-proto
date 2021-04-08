import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

import DashLayout from 'src/layouts/DashLayout/DashLayout'

import PalletCreateCell from 'src/components/pallet/PalletCreateCell/PalletCreateCell'

const PalletCreatePage = () => {
  return (
    <DashLayout>
      <Container className="palletized-container">
        <Row>
          <Col>
            <h1>Create Pallet</h1>
            {/* <p className="text-muted">
              Create a new Pallet, tagging it to the selected
              Warehouse-and-Location, with the Products you specify.
            </p> */}
          </Col>
        </Row>
        <Row>
          <Col>
            <PalletCreateCell />
          </Col>
        </Row>
      </Container>
    </DashLayout>
  )
}

export default PalletCreatePage
