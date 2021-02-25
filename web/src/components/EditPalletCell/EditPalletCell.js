import { useMutation, useFlash } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import PalletForm from 'src/components/PalletForm'

export const QUERY = gql`
  query FIND_PALLET_BY_ID($id: String!) {
    pallet: pallet(id: $id) {
      id
      name
      updatedAt
      createdAt
      locationId
      orderId
    }
  }
`
const UPDATE_PALLET_MUTATION = gql`
  mutation UpdatePalletMutation($id: String!, $input: UpdatePalletInput!) {
    updatePallet(id: $id, input: $input) {
      id
      name
      updatedAt
      createdAt
      locationId
      orderId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Success = ({ pallet }) => {
  const { addMessage } = useFlash()
  const [updatePallet, { loading, error }] = useMutation(
    UPDATE_PALLET_MUTATION,
    {
      onCompleted: () => {
        navigate(routes.pallets())
        addMessage('Pallet updated.', { classes: 'rw-flash-success' })
      },
    }
  )

  const onSave = (input, id) => {
    updatePallet({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Pallet {pallet.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <PalletForm
          pallet={pallet}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
