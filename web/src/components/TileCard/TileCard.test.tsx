import { render } from '@redwoodjs/testing'
import { BsApp } from 'react-icons/bs'

import TileCard from './TileCard'

describe('TileCard', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<TileCard icon={(size) => <BsApp size={size} />} text={15} />)
    }).not.toThrow()
  })

  it('renders the right "text"', async () => {
    const textContent = "I'm the header"

    const comp = render(
      <TileCard icon={(size) => <BsApp size={size} />}>{textContent}</TileCard>
    )
    const text = await comp.findByText(textContent)

    expect(text).not.toBeUndefined()
  })

  it('renders a header and footer', async () => {
    const headerText = "I'm the header"
    const footerText = "I'm the footer"

    const comp = render(
      <TileCard
        footer={headerText}
        header={footerText}
        icon={(size) => <BsApp size={size} />}
      >
        15
      </TileCard>
    )
    const header = await comp.findByText(headerText)
    const footer = await comp.findByText(footerText)

    expect(header).not.toBeUndefined()
    expect(footer).not.toBeUndefined()
  })
})
