import DashLayout from 'src/layouts/DashLayout'
import ProductCell from 'src/components/ProductCell'

const ProductPage = ({ id }) => {
  return (
    <DashLayout>
      <ProductCell id={id} />
    </DashLayout>
  )
}

export default ProductPage
