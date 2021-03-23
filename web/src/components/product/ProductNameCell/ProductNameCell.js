import Skeleton from 'react-loading-skeleton'

export const QUERY = gql`
  query ProductNameQuery($id: String!) {
    product(id: $id) {
      partNumber
      description
    }
  }
`

export const Loading = () => <Skeleton />

export const Empty = () => 'Product Not Found'

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ product }) =>
  product.description || product.partNumber
