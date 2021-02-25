import LocationsLayout from 'src/layouts/LocationsLayout'
import LocationCell from 'src/components/LocationCell'

const LocationPage = ({ id }) => {
  return (
    <LocationsLayout>
      <LocationCell id={id} />
    </LocationsLayout>
  )
}

export default LocationPage
