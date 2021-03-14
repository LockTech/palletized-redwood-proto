import { useEffect } from 'react'
import { toast } from '@redwoodjs/web/toast'
import Skeleton from 'react-loading-skeleton'

export const QUERY = gql`
  query ActivePalletCountQuery($pallet: ComplexPalletInput) {
    count: countPallets(pallet: $pallet)
  }
`

export const Loading = () => <Skeleton />

export const Empty = () => '0'

export const Failure = ({ id }) => {
  useEffect(() => {
    toast.error(
      `An error occured while retrieving the Active-Pallet count for Order: ${id}`
    )
  }, [id])

  return '-'
}

export const Success = ({ count }) => count
