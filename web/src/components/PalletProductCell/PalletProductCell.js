import PalletProduct from 'src/components/PalletProduct'

export const QUERY = gql`
  query FIND_PALLET_PRODUCT_BY_ID($id: String!) {
    palletProduct: palletProduct(id: $id) {
      id
      palletId
      productId
      updatedAt
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>PalletProduct not found</div>

export const Success = ({ palletProduct }) => {
  return <PalletProduct palletProduct={palletProduct} />
}
