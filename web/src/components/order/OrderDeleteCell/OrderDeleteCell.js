import { useCallback, useEffect, useState } from 'react'
import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import Button from 'react-bootstrap/Button'

import DeleteModal from 'src/components/DeleteModal'
import OrderNameCell from 'src/components/order/OrderNameCell'

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
  const [deleteQuery, { called, error }] = useMutation(DELETE_ORDER_MUTATION, {
    onCompleted: () => {
      navigate(routes.orders())
      toast.success('Order has been successfully deleted.')
    },
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  useEffect(() => {
    if (called && error) {
      toast.error(error.message)
    }
  }, [called, error])

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
      <DeleteModal
        onConfirm={onDeleteConfirm}
        onHide={onHideDeleteModal}
        show={deleteModalVis}
      >
        <p>
          Are you sure you want to delete order{' '}
          <code>
            <OrderNameCell id={id} />
          </code>
          ?
        </p>
        <p>
          <strong>
            This action <u className="text-danger">cannot be undone</u>.
          </strong>
        </p>
        <p>
          An Order cannot be deleted if it has any <em>Active Pallets</em>.
        </p>
      </DeleteModal>
      <Button block onClick={onDeleteClick} variant="outline-danger">
        Delete
      </Button>
    </>
  )
}
export default OrderDeleteCell
