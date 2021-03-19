import { useCallback, useMemo } from 'react'
import { Link, navigate, routes } from '@redwoodjs/router'
import { useRecoilValue } from '@salvoravida/recoil'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

import DashLayout from 'src/layouts/DashLayout/DashLayout'
import SwitchWarehouseForm from 'src/components/warehouse/SwitchWarehouseForm'
import LocationListCell from 'src/components/location/LocationListCell'
import DefaultWarehouseAtom from 'src/atoms/DefaultWarehouseAtom/DefaultWarehouseAtom'

const LocationListPage = ({ active = true }) => {
  const isActive = useMemo(() => JSON.parse(active), [active])

  const toggleActive = useCallback((active) => {
    navigate(routes.orders({ active }))
  }, [])

  const defaultWarehouse = useRecoilValue(DefaultWarehouseAtom)

  return (
    <DashLayout>
      <Container className="palletized-container">
        <Row>
          <Col>
            <h1>Locations</h1>
            <p className="text-muted">
              A list of the Locations accessible by your organization.
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
                  name="Locations"
                  onClick={() => null}
                  onToggleActive={toggleActive}
                  resourceName="Locations"
                />
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <LocationListCell
              warehouseId={isActive ? defaultWarehouse.id : null}
            />
          </Col>
        </Row>
      </Container>
    </DashLayout>
  )
}

export default LocationListPage
