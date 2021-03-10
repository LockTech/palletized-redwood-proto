import DeleteModal from 'src/components/DeleteModal/DeleteModal'
import type { DeleteModalProps } from 'src/components/DeleteModal/DeleteModal'
import WarehouseNameCell from 'src/components/warehouse/WarehouseNameCell/WarehouseNameCell'

export interface WarehouseDeleteModalProps extends DeleteModalProps {
  id: string
}

const WarehouseDeleteModal: React.FC<WarehouseDeleteModalProps> = ({
  id,
  ...otherProps
}) => {
  return (
    <DeleteModal {...otherProps}>
      <p>
        Are you sure you want to delete the{' '}
        <strong>
          <WarehouseNameCell id={id} />
        </strong>{' '}
        warehouse?
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
  )
}

export default WarehouseDeleteModal
