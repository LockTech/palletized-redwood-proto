import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import Card from 'react-bootstrap/Card'

import ProductForm from 'src/components/product/ProductForm/ProductForm'
import ProductTooltip from 'src/components/product/ProductTooltip/ProductTooltip'

export const PRODUCT_CREATE_MUTATION = gql`
  mutation ProductCreateMutation($input: CreateProductInput!) {
    createProduct(input: $input) {
      id
    }
  }
`

const ProductCreateCell = () => {
  const [createProduct, { loading, error }] = useMutation(
    PRODUCT_CREATE_MUTATION,
    {
      onCompleted: () => {
        navigate(routes.products())
        toast.success('Product successfully created.')
      },
    }
  )

  const onSave = (input) => {
    createProduct({ variables: { input } })
  }

  return (
    <Card>
      <Card.Header className="d-flex flex-direction-row justify-content-between">
        New Product
        <ProductTooltip />
      </Card.Header>
      <Card.Body>
        <ProductForm onSave={onSave} error={error} loading={loading} />
      </Card.Body>
    </Card>
  )
}

export default ProductCreateCell
