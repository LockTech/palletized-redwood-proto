import Pallet from 'src/components/Pallet'

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

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Pallet not found</div>

export const Success = ({ pallet }) => {
  return <Pallet pallet={pallet} />
}
