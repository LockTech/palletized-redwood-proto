import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import type { ModalProps } from 'react-bootstrap/Modal'

import './DeleteModal.css'

export interface DeleteModalProps extends React.HTMLProps<HTMLDivElement> {
  modalProps?: Partial<ModalProps>
  onConfirm: () => void
  onHide: () => void
  show: boolean
}

const DeleteModal: React.FC<DeleteModalProps> = ({
  children,
  modalProps,
  onConfirm,
  onHide,
  show,
}) => {
  return (
    <Modal
      backdrop="static"
      centered
      keyboard={false}
      onHide={onHide}
      show={show}
      {...modalProps}
    >
      <Modal.Header closeButton>Delete Confirmation</Modal.Header>
      <Modal.Body>{children}</Modal.Body>
      <Modal.Footer>
        <Button onClick={onConfirm} variant="danger">
          Delete
        </Button>
        <Button onClick={onHide} variant="outline-primary">
          Cancel
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default DeleteModal
