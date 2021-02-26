import DashLayout from 'src/layouts/DashLayout'
import LocationCell from 'src/components/LocationCell'

const LocationPage = ({ id }) => {
  return (
    <DashLayout>
      <LocationCell id={id} />
    </DashLayout>
  )
}

export default LocationPage
