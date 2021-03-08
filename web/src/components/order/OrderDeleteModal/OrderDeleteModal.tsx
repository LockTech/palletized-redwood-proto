import DeleteModal from 'src/components/DeleteModal/DeleteModal'
import type { DeleteModalProps } from 'src/components/DeleteModal/DeleteModal'

export interface OrderDeleteModalProps extends DeleteModalProps {
  orderNumber: string
}

const OrderDeleteModal: React.FC<OrderDeleteModalProps> = ({
  orderNumber,
  ...otherProps
}) => {
  return (
    <DeleteModal {...otherProps}>
      <p>
        Are you sure you want to delete order <strong>{orderNumber}</strong>?
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
