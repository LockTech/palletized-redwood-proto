import { useCallback, useState } from 'react'
import { useFlash, useMutation } from '@redwoodjs/web'
import { Link, routes } from '@redwoodjs/router'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

import LocaleTime from 'src/components/LocaleTime'
import WarehouseDeleteModal from 'src/components/warehouse/WarehouseDeleteModal'
import { QUERY } from 'src/components/warehouse/WarehouseListCell'
import { DELETE_WAREHOUSE_MUTATION } from 'src/components/warehouse/WarehouseDeleteCell'

const WarehouseList = ({ warehouses }) => {
  const { addMessage } = useFlash()

  const [deleteWarehouseQuery] = useMutation(DELETE_WAREHOUSE_MUTATION, {
    onCompleted: () => {
      addMessage('Warehouse has been successfully deleted.', {
        variant: 'success',
      })
    },
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const [deleteModalVis, setDeleteModalVis] = useState(false)
  const [deleteWarehouse, setDeleteWarehouse] = useState(undefined)
  const onHideDeleteModal = useCallback(() => {
    setDeleteModalVis(false)
  }, [setDeleteModalVis])

  const onDeleteClick = useCallback(
    (warehouse) => {
      setDeleteWarehouse(warehouse)
      setDeleteModalVis(true)
    },
    [setDeleteModalVis, setDeleteWarehouse]
  )
  const onDeleteConfirm = useCallback(() => {
    deleteWarehouseQuery({ variables: { id: deleteWarehouse } })
    setDeleteModalVis(false)
  }, [deleteWarehouse, deleteWarehouseQuery, setDeleteModalVis])

  return (
    <>
      <WarehouseDeleteModal
        id={deleteWarehouse}
        onConfirm={onDeleteConfirm}
        onHide={onHideDeleteModal}
        show={deleteModalVis}
      />
      <Row>
        {warehouses.map((warehouse, index) => (
          <Col key={index} lg={4} md={6}>
            <Card className="mb-3">
              <Card.Body>
                <Card.Title>{warehouse.name}</Card.Title>
                <Card.Subtitle className="d-flex align-items-center mb-3 text-muted">
                  <strong>Date Created:</strong>
                  &nbsp;
                  <LocaleTime datetime={warehouse.createdAt} />
                </Card.Subtitle>
                <Card.Subtitle className="d-flex align-items-center mb-3 text-muted">
                  <strong>Last Updated:</strong>
                  &nbsp;
                  <LocaleTime datetime={warehouse.updatedAt} />
                </Card.Subtitle>
                <Button
                  as={Link}
                  block
                  className="mb-2"
                  to={routes.warehouse({ id: warehouse.id })}
                  variant="outline-primary"
                >
                  Details
                </Button>
                <Button
                  as={Link}
                  block
                  to={routes.editWarehouse({ id: warehouse.id })}
                  variant="outline-secondary"
                >
                  Edit
                </Button>
                <Button
                  as={Link}
                  block
                  to={routes.warehouse({ id: warehouse.id })}
                  variant="outline-secondary"
                >
                  Switch to Warehouse
                </Button>
                <Button
                  block
                  onClick={() => onDeleteClick(warehouse.id)}
                  variant="outline-danger"
                >
                  Delete
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  )
}

export default WarehouseList
