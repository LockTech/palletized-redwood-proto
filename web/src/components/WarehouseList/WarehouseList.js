import { useCallback, useState } from 'react'
import { useFlash, useMutation } from '@redwoodjs/web'
import { Link, routes } from '@redwoodjs/router'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

import DeleteModal from 'src/components/DeleteModal/DeleteModal'
import { QUERY } from 'src/components/WarehouseListCell'

const DELETE_WAREHOUSE_MUTATION = gql`
  mutation DeleteWarehouseMutation($id: String!) {
    deleteWarehouse(id: $id) {
      id
    }
  }
`

const timeTag = (datetime) => {
  return (
    <time dateTime={datetime} title={datetime}>
      {new Date(datetime).toLocaleString()}
    </time>
  )
}

const WarehouseList = ({ warehouses }) => {
  const { addMessage } = useFlash()

  const [deleteWarehouseQuery] = useMutation(DELETE_WAREHOUSE_MUTATION, {
    onCompleted: () => {
      addMessage('Warehouse deleted.', { classes: 'rw-flash-success' })
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
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
    deleteWarehouseQuery({ variables: { id: deleteWarehouse.id } })
    setDeleteModalVis(false)
  }, [deleteWarehouse, deleteWarehouseQuery, setDeleteModalVis])

  return (
    <>
      <DeleteModal
        onConfirm={onDeleteConfirm}
        onHide={onHideDeleteModal}
        show={deleteModalVis}
      >
        <p>
          Are you sure you want to <strong>delete</strong> the{' '}
          {deleteWarehouse?.name} warehouse?
        </p>
        <p>
          This action{' '}
          <u className="text-danger">
            <strong>cannot be undone</strong>
          </u>{' '}
          and <em>will</em> delete all Locations belonging to this warehouse.
        </p>
        <p>
          If deleted, you will have the opportunity to move each Pallet which is
          tagged to a will-be-deleted Location.
        </p>
      </DeleteModal>
      <Row>
        {warehouses.map((warehouse, index) => (
          <Col key={index} lg={4} md={6}>
            <Card className="mb-3">
              <Card.Body>
                <Card.Text className="h3 mb-3">{warehouse.name}</Card.Text>
                <Card.Text className="d-flex align-items-center mb-3">
                  <strong>Date Created:</strong>
                  &nbsp;
                  {timeTag(warehouse.createdAt)}
                </Card.Text>
                <Card.Text className="d-flex align-items-center mb-3">
                  <strong>Last Updated:</strong>
                  &nbsp;
                  {timeTag(warehouse.updatedAt)}
                </Card.Text>
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
                  onClick={() => onDeleteClick(warehouse)}
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
