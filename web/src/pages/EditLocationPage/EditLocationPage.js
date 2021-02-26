import DashLayout from 'src/layouts/DashLayout'
import EditLocationCell from 'src/components/EditLocationCell'

const EditLocationPage = ({ id }) => {
  return (
    <DashLayout>
      <EditLocationCell id={id} />
    </DashLayout>
  )
}

export default EditLocationPage
