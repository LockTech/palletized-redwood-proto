import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import Card from 'react-bootstrap/Card'

import PalletForm from 'src/components/pallet/PalletForm/PalletForm'
import PalletTooltip from 'src/components/pallet/PalletTooltip/PalletTooltip'

export const PALLET_CREATE_MUTATION = gql`
  mutation PalletCreateMutation($input: CreateProductInput!) {
    createProduct(input: $input) {
      id
    }
  }
`

const PalletCreateCell = () => {
  const [createPallet, { loading, error }] = useMutation(
    PALLET_CREATE_MUTATION,
    {
      onCompleted: () => {
        navigate(routes.pallets())
        toast.success('Pallet successfully created.')
      },
    }
  )

  const onSave = (input) => {
    createPallet({ variables: { input } })
  }

  return (
    <Card>
      <Card.Header className="d-flex flex-direction-row align-items-center justify-content-between">
        New Pallet
        <PalletTooltip />
      </Card.Header>
      <Card.Body>
        <PalletForm onSave={onSave} error={error} loading={loading} />
      </Card.Body>
    </Card>
  )
}

export default PalletCreateCell
