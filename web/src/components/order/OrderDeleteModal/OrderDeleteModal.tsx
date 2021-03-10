import DeleteModal from 'src/components/DeleteModal/DeleteModal'
import type { DeleteModalProps } from 'src/components/DeleteModal/DeleteModal'

import OrderNameCell from 'src/components/order/OrderNameCell'

export interface OrderDeleteModalProps extends DeleteModalProps {
  id: string
}

const OrderDeleteModal: React.FC<OrderDeleteModalProps> = ({
  id,
  ...otherProps
}) => {
  return (
    <DeleteModal {...otherProps}>
      <p>
        Are you sure you want to delete order{' '}
        <strong>
          <OrderNameCell id={id} />
        </strong>
        ?
      </p>
      <p>
        This action{' '}
        <u className="text-danger">
          <strong>cannot be undone</strong>
        </u>
        .
      </p>
    </DeleteModal>
  )
}

export default OrderDeleteModal
