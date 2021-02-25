import Product from 'src/components/Product'

export const QUERY = gql`
  query FIND_PRODUCT_BY_ID($id: String!) {
    product: product(id: $id) {
      id
      name
      updatedAt
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Product not found</div>

export const Success = ({ product }) => {
  return <Product product={product} />
}
