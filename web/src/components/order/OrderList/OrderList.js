import { useCallback, useState } from 'react'
import { Link, routes } from '@redwoodjs/router'
import { useFlash, useMutation } from '@redwoodjs/web'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

import OrderDeleteModal from 'src/components/order/OrderDeleteModal'
import { QUERY } from 'src/components/order/OrderListCell'

const ORDER_DELETE_MUTATION = gql`
  mutation DeleteOrderMutation($id: String!) {
    deleteOrder(id: $id) {
      id
    }
  }
`

const OrderList = ({ orders }) => {
  const { addMessage } = useFlash()

  const [deleteOrderQuery] = useMutation(ORDER_DELETE_MUTATION, {
    onCompleted: () => {
      addMessage('Order has been successfully deleted.', { variant: 'success' })
    },
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const [deleteModalVis, setDeleteModalVis] = useState(false)
  const [deleteOrder, setDeleteOrder] = useState(undefined)
  const onHideDeleteModal = useCallback(() => {
    setDeleteModalVis(false)
  }, [setDeleteModalVis])

  const onDeleteClick = useCallback(
    (order) => {
      setDeleteOrder(order)
      setDeleteModalVis(true)
    },
    [setDeleteModalVis, setDeleteOrder]
  )
  const onDeleteConfirm = useCallback(() => {
    deleteOrderQuery({ variables: { id: deleteOrder.id } })
    setDeleteModalVis(false)
  }, [deleteOrder, deleteOrderQuery, setDeleteModalVis])

  return (
    <>
      <OrderDeleteModal
        onConfirm={onDeleteConfirm}
        onHide={onHideDeleteModal}
        orderNumber={deleteOrder?.orderNumber}
        show={deleteModalVis}
      />
      <Row>
        {orders.map((order, index) => (
          <Col key={index} lg={4} md={6}>
            <Card>
              <Card.Body>
                <Card.Title>{order.jobName || order.orderNumber}</Card.Title>
                <Card.Subtitle className="mb-3 text-muted">
                  {order.jobName ? order.orderNumber : 'No Job-Name Specified'}
                </Card.Subtitle>
                <Button
                  as={Link}
                  block
                  to={routes.order({ id: order.id })}
                  variant="outline-primary"
                >
                  Details
                </Button>
                <Button
                  as={Link}
                  block
                  to={routes.editOrder({ id: order.id })}
                  variant="outline-secondary"
                >
                  Edit
                </Button>
                <Button
                  block
                  onClick={() => onDeleteClick(order)}
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

export default OrderList
