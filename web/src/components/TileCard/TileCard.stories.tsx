import Card from 'react-bootstrap/Card'
import { BsHammer } from 'react-icons/bs'
import { FaAddressCard } from 'react-icons/fa'
import TileCard from './TileCard'

export const Default = () => {
  return (
    <TileCard
      icon={(size) => <BsHammer className="text-primary" size={size} />}
      text={<Card.Text className="display-4">Hammer Time</Card.Text>}
    />
  )
}

export const HeaderAndFooter = () => {
  return (
    <TileCard
      footer={
        <>
          <Card.Link href="">Lorem</Card.Link>
          <Card.Link className="text-danger" href="">
            Ipsum
          </Card.Link>
        </>
      }
      header={'Bootstrap Hammers in Stock'}
      icon={(size) => <BsHammer className="text-primary" size={size} />}
      text={<Card.Text className="display-4">15</Card.Text>}
    />
  )
}

export const IconAmbiguity = () => {
  return (
    <TileCard
      footer={
        <>
          <Card.Link href="">Lorem</Card.Link>
          <Card.Link className="text-danger" href="">
            Ipsum
          </Card.Link>
        </>
      }
      header={'Font-Awesome Address Cards in Stock'}
      icon={(size) => <FaAddressCard className="text-danger" size={size} />}
      text={<Card.Text className="display-4">0</Card.Text>}
    />
  )
}

export default { title: 'Components/TileCard' }
