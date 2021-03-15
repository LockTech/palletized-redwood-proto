import { useMemo, useState } from 'react'
import { Link, routes } from '@redwoodjs/router'
import { useRecoilValue } from '@salvoravida/recoil'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

import DashLayout from 'src/layouts/DashLayout/DashLayout'
import SwitchWarehouseForm from 'src/components/warehouse/SwitchWarehouseForm'
import LocationListCell from 'src/components/location/LocationListCell'
import ActiveLocationListCell from 'src/components/location/ActiveLocationListCell'
import DefaultWarehouseAtom from 'src/atoms/DefaultWarehouseAtom/DefaultWarehouseAtom'

const LocationListPage = ({ active = true }) => {
  const parsedActive = useMemo(() => JSON.parse(active), [active])
  const [isActive, setIsActive] = useState(parsedActive)

  const defaultWarehouse = useRecoilValue(DefaultWarehouseAtom)

  return (
    <DashLayout>
      <Container className="palletized-container">
        <Row>
          <Col>
            <h1>Locations</h1>
            <p className="text-muted">
              A list of all the Locations accessible by your organization.
            </p>
          </Col>
        </Row>
        <Row>
          <Col className="mb-3">
            <Button
              as={Link}
              block
              to={routes.createLocation()}
              variant="primary"
            >
              Create New Location
            </Button>
          </Col>
        </Row>
        <Row>
          <Col className="mb-3">
            <Card>
              <Card.Body>
                <SwitchWarehouseForm
                  isActive={isActive}
                  onClick={() => null}
                  onToggleActive={(isActive) => setIsActive(isActive)}
                />
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            {isActive ? (
              <ActiveLocationListCell warehouseId={defaultWarehouse.id} />
            ) : (
              <LocationListCell />
            )}
          </Col>
        </Row>
      </Container>
    </DashLayout>
  )
}

export default LocationListPage
