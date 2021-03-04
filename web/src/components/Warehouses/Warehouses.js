import { useCallback, useState } from 'react'
import { useFlash, useMutation } from '@redwoodjs/web'
import { Link, routes } from '@redwoodjs/router'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

import DeleteModal from 'src/components/DeleteModal/DeleteModal'
import { QUERY } from 'src/components/WarehousesCell'

const DELETE_WAREHOUSE_MUTATION = gql`
  mutation DeleteWarehouseMutation($id: String!) {
    deleteWarehouse(id: $id) {
      id
    }
  }
`

const MAX_STRING_LENGTH = 150

const truncate = (text) => {
  let output = text
  if (text && text.length > MAX_STRING_LENGTH) {
    output = output.substring(0, MAX_STRING_LENGTH) + '...'
  }
  return output
}

const _jsonTruncate = (obj) => {
  return truncate(JSON.stringify(obj, null, 2))
}

const _timeTag = (datetime) => {
  return (
    <time dateTime={datetime} title={datetime}>
      {new Date(datetime).toUTCString()}
    </time>
  )
}

const _checkboxInputTag = (checked) => {
  return <input type="checkbox" checked={checked} disabled />
}

const WarehousesList = ({ warehouses }) => {
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
          Are you sure you want to delete the{' '}
          <strong>{deleteWarehouse?.name}</strong> warehouse?
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
                <Card.Text className="h3">{warehouse.name}</Card.Text>
                <Card.Text>
                  Date Created: {new Date(warehouse.createdAt).toLocaleString()}
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
                  className="mb-2"
                  to={routes.editWarehouse({ id: warehouse.id })}
                  variant="outline-secondary"
                >
                  Locations
                </Button>
                <Button
                  block
                  className="mb-2"
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

export default WarehousesList
