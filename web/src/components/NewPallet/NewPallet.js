import { useMutation, useFlash } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import PalletForm from 'src/components/PalletForm'

import { QUERY } from 'src/components/PalletsCell'

const CREATE_PALLET_MUTATION = gql`
  mutation CreatePalletMutation($input: CreatePalletInput!) {
    createPallet(input: $input) {
      id
    }
  }
`

const NewPallet = () => {
  const { addMessage } = useFlash()
  const [createPallet, { loading, error }] = useMutation(
    CREATE_PALLET_MUTATION,
    {
      onCompleted: () => {
        navigate(routes.pallets())
        addMessage('Pallet created.', { classes: 'rw-flash-success' })
      },
    }
  )

  const onSave = (input) => {
    createPallet({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Pallet</h2>
      </header>
      <div className="rw-segment-main">
        <PalletForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewPallet
