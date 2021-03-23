import { useEffect } from 'react'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'
import Card from 'react-bootstrap/Card'

import LoadingCard from 'src/components/LoadingCard'
import ProductForm from 'src/components/product/ProductForm/ProductForm'
import ProductNameCell from 'src/components/product/ProductNameCell/ProductNameCell'
import ProductTooltip from 'src/components/product/ProductTooltip/ProductTooltip'

export const QUERY = gql`
  query ProductEditQuery($id: String!) {
    product(id: $id) {
      id
      partNumber
      description
    }
  }
`
const UPDATE_PRODUCT_MUTATION = gql`
  mutation UpdateProductMutation($id: String!, $input: UpdateProductInput!) {
    updateProduct(id: $id, input: $input) {
      id
    }
  }
`
const commonHeaderClasses =
  'd-flex flex-direction-row align-items-center justify-content-between'
const commonHeader = (id) => (
  <Card.Header className={commonHeaderClasses}>
    <span>
      Editing Product:&nbsp;
      <strong>
        <ProductNameCell id={id} />
      </strong>
    </span>
    <ProductTooltip />
  </Card.Header>
)

export const Loading = () => <LoadingCard />

export const Empty = ({ id }) => {
  useEffect(() => {
    toast.error(`Could not find Product: ${id}.`, {
      variant: 'danger',
    })
  }, [id])

  return (
    <Card>
      {commonHeader(id)}
      <Card.Body>Could not find Product: {id}.</Card.Body>
    </Card>
  )
}

export const Failure = ({ id }) => {
  useEffect(() => {
    toast.error(`An error occured while trying to edit Product: ${id}.`, {
      variant: 'danger',
    })
  }, [id])

  return (
    <Card>
      {commonHeader(id)}
      <Card.Body>
        An error occured while trying to edit Product: {id}.
      </Card.Body>
    </Card>
  )
}

export const Success = ({ product }) => {
  const [updateProduct, { loading, error }] = useMutation(
    UPDATE_PRODUCT_MUTATION,
    {
      onCompleted: () => {
        navigate(routes.products())
        toast.success('Product has been successfully updated.')
      },
    }
  )

  const onSave = (input, id) => {
    updateProduct({ variables: { id, input } })
  }

  return (
    <Card>
      <Card.Header className={commonHeaderClasses}>
        <span>
          Editing Product:&nbsp;
          <strong>{product.description || product.partNumber}</strong>
        </span>
        <ProductTooltip />
      </Card.Header>
      <Card.Body>
        <ProductForm
          onSave={onSave}
          error={error}
          loading={loading}
          product={product}
        />
      </Card.Body>
    </Card>
  )
}
