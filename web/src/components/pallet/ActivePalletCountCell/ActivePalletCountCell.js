export const QUERY = gql`
  query ActivePalletCountQuery {
    activePalletCount {
      id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ activePalletCount }) => {
  return JSON.stringify(activePalletCount)
}
