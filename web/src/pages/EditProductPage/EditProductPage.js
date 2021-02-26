import DashLayout from 'src/layouts/DashLayout'
import EditProductCell from 'src/components/EditProductCell'

const EditProductPage = ({ id }) => {
  return (
    <DashLayout>
      <EditProductCell id={id} />
    </DashLayout>
  )
}

export default EditProductPage
