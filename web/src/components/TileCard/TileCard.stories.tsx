import Card from 'react-bootstrap/Card'
import { BsHammer } from 'react-icons/bs'
import { FaAddressCard } from 'react-icons/fa'
import TileCard from './TileCard'

export const Default = () => {
  return (
    <TileCard icon={(size) => <BsHammer size={size} />}>
      <Card.Text>Hammer Time</Card.Text>
    </TileCard>
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
      icon={(size) => <BsHammer size={size} />}
    >
      <Card.Text>15</Card.Text>
    </TileCard>
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
      icon={(size) => <FaAddressCard size={size} />}
    >
      <Card.Text>15</Card.Text>
    </TileCard>
  )
}

export default { title: 'Components/TileCard' }
