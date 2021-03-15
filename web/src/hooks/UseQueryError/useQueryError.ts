import { useEffect } from 'react'
import { toast } from '@redwoodjs/web/toast'

const useQueryError = (called: boolean, error: Error) => {
  useEffect(() => {
    if (called && error) {
      toast.error(error.message)
    }
  }, [called, error])
}

export default useQueryError
