import {
  Loading as LLoading,
  Empty as LEmpty,
  Failure as LFailure,
  Success as LSuccess,
} from 'src/components/location/LocationListCell'

export const QUERY = gql`
  query ACTIVE_LOCATIONS($warehouseId: String!) {
    locations(warehouseId: $warehouseId) {
      id
      name
      updatedAt
      createdAt
      warehouse {
        id
        name
      }
    }
  }
`

export const Loading = LLoading

export const Empty = LEmpty

export const Failure = LFailure

export const Success = LSuccess
