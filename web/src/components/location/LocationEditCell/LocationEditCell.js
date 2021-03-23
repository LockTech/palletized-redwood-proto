import { useEffect } from 'react'
import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import Card from 'react-bootstrap/Card'

import LoadingCard from 'src/components/LoadingCard'
import LocationForm from 'src/components/location/LocationForm/LocationForm'
import LocationNameCell from 'src/components/location/LocationNameCell/LocationNameCell'
import LocationTooltip from 'src/components/location/LocationTooltip/LocationTooltip'

export const QUERY = gql`
  query FindLocationById($id: String!) {
    location(id: $id) {
      id
      name
      warehouse {
        id
        name
      }
    }
  }
`

const UPDATE_LOCATION_MUTATION = gql`
  mutation UpdateLocationMutation($id: String!, $input: UpdateLocationInput!) {
    updateLocation(id: $id, input: $input) {
      id
      name
      warehouse {
        id
        name
      }
    }
  }
`

const commonHeaderClasses =
  'd-flex flex-direction-row align-items-center justify-content-between'
const commonHeader = (id) => (
  <Card.Header className={commonHeaderClasses}>
    <span>
      Editing Location:&nbsp;
      <strong>
        <LocationNameCell id={id} />
      </strong>
    </span>
    <LocationTooltip />
  </Card.Header>
)

export const Loading = () => <LoadingCard />

export const Empty = ({ id }) => {
  useEffect(() => {
    toast.error(`Could not find Location: ${id}.`)
  }, [id])

  return (
    <Card>
      {commonHeader(id)}
      <Card.Body>Could not find Location: {id}.</Card.Body>
    </Card>
  )
}

export const Failure = ({ id }) => {
  useEffect(() => {
    toast.error(`An error occured while trying to edit Location: ${id}.`)
  }, [id])

  return (
    <Card>
      {commonHeader(id)}
      <Card.Body>An error occured while trying to edit the Location.</Card.Body>
    </Card>
  )
}

export const Success = ({ location }) => {
  const [updateLocation, { loading, error }] = useMutation(
    UPDATE_LOCATION_MUTATION,
    {
      onCompleted: () => {
        navigate(routes.locations())
        toast.success('Location has been successfully updated.')
      },
    }
  )

  const onSave = (input, id) => {
    updateLocation({ variables: { id, input } })
  }

  return (
    <Card>
      <Card.Header className={commonHeaderClasses}>
        <span>
          Editing Location:&nbsp;
          <strong>{location.name}</strong>
        </span>
        <LocationTooltip />
      </Card.Header>
      <Card.Body>
        <LocationForm
          onSave={onSave}
          error={error}
          loading={loading}
          location={location}
        />
      </Card.Body>
    </Card>
  )
}
