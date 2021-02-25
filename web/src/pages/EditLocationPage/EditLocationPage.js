import LocationsLayout from 'src/layouts/LocationsLayout'
import EditLocationCell from 'src/components/EditLocationCell'

const EditLocationPage = ({ id }) => {
  return (
    <LocationsLayout>
      <EditLocationCell id={id} />
    </LocationsLayout>
  )
}

export default EditLocationPage
