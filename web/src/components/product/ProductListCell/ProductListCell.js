import Alert from 'react-bootstrap/Alert'
import Card from 'react-bootstrap/Card'

import LoadingCard from 'src/components/LoadingCard/LoadingCard'
import ProductList from 'src/components/product/ProductList/ProductList'

export const QUERY = gql`
  query ProductListQuery {
    products {
      id
      partNumber
      description
    }
  }
`

export const Loading = () => <LoadingCard />

export const Empty = () => (
  <Card>
    <Card.Body>
      <Card.Title>No Products Found</Card.Title>
      <Card.Text>
        You do not have any Products configured for your organization.
      </Card.Text>
    </Card.Body>
  </Card>
)

export const Failure = ({ error }) => (
  <>
    <Alert variant="danger">
      <p>{error.message}</p>
    </Alert>
    <Card>
      <Card.Body>
        <Card.Title>No Orders Found</Card.Title>
        <Card.Text>
          An error occured while fetching your organization&apos;s Product list.
        </Card.Text>
      </Card.Body>
    </Card>
  </>
)

export const Success = ({ products }) => <ProductList products={products} />
