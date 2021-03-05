import { BsHammer } from 'react-icons/bs'
import { FaAddressCard } from 'react-icons/fa'

import TileCard from './TileCard'

export const Default = () => {
  return (
    <TileCard icon={(size) => <BsHammer size={size} />}>Hammer Time</TileCard>
  )
}

export const Header = () => {
  return (
    <TileCard
      header="Bootstrap Hammers in Stock"
      icon={(size) => <BsHammer size={size} />}
    >
      15
    </TileCard>
  )
}

export const IconAmbiguity = () => {
  return (
    <TileCard
      header={'Font-Awesome Address Cards in Stock'}
      icon={(size) => <FaAddressCard size={size} />}
    >
      15
    </TileCard>
  )
}

export default { title: 'Components/TileCard' }
