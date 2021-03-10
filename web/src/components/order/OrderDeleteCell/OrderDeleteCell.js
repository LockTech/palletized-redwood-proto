import { useCallback, useEffect, useState } from 'react'
import { navigate, routes } from '@redwoodjs/router'
import { useFlash, useMutation } from '@redwoodjs/web'
import Button from 'react-bootstrap/Button'

import OrderDeleteModal from 'src/components/order/OrderDeleteModal'
import { QUERY } from 'src/components/order/OrderListCell'

export const DELETE_ORDER_MUTATION = gql`
  mutation DeleteOrderMutation($id: String!) {
    deleteOrder(id: $id) {
      id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const OrderDeleteCell = ({ id }) => {
  const { addMessage } = useFlash()
  const [deleteQuery, { called, error }] = useMutation(DELETE_ORDER_MUTATION, {
    onCompleted: () => {
      navigate(routes.orders())
      addMessage('Order has been successfully deleted.', {
        variant: 'success',
      })
    },
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  useEffect(() => {
    if (called && error) {
      addMessage(
        <span>
          <p>{error.name}</p>
          <p>{error.message}</p>
        </span>,
        { variant: 'danger' }
      )
    }
  }, [addMessage, called, error])

  const [deleteModalVis, setDeleteModalVis] = useState(false)
  const onHideDeleteModal = useCallback(() => {
    setDeleteModalVis(false)
  }, [setDeleteModalVis])

  const onDeleteClick = useCallback(() => {
    setDeleteModalVis(true)
  }, [setDeleteModalVis])
  const onDeleteConfirm = useCallback(() => {
    deleteQuery({ variables: { id } })
    setDeleteModalVis(false)
  }, [deleteQuery, setDeleteModalVis, id])

  return (
    <>
      <OrderDeleteModal
        id={id}
        onConfirm={onDeleteConfirm}
        onHide={onHideDeleteModal}
        show={deleteModalVis}
      />
      <Button block onClick={onDeleteClick} variant="outline-danger">
        Delete
      </Button>
    </>
  )
}
export default OrderDeleteCell
