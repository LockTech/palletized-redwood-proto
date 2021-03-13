import DeleteModal from 'src/components/DeleteModal/DeleteModal'
import type { DeleteModalProps } from 'src/components/DeleteModal/DeleteModal'

import LocationNameCell from 'src/components/location/LocationNameCell'
import WarehouseNameCell from 'src/components/warehouse/WarehouseNameCell'

export interface LocationDeleteModalProps extends DeleteModalProps {
  id: string
  warehouseId: string
}

const LocationDeleteModal: React.FC<LocationDeleteModalProps> = ({
  id,
  warehouseId,
  ...otherProps
}) => {
  return (
    <DeleteModal {...otherProps}>
      <p>
        Are you sure you want to delete Location{' '}
        <code>
          <LocationNameCell id={id} />
        </code>{' '}
        from Warehouse{' '}
        <code>
          <WarehouseNameCell id={warehouseId} />
        </code>
        ?
      </p>
      <p>
        <strong>
          This action <u className="text-danger">cannot be undone</u>.
        </strong>
      </p>
    </DeleteModal>
  )
}

export default LocationDeleteModal
