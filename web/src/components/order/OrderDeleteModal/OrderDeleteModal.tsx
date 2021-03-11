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
  )
}

export default OrderDeleteModal
