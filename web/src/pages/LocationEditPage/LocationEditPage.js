import { Link, routes } from '@redwoodjs/router'

const LocationEditPage = () => {
  return (
    <>
      <h1>LocationEditPage</h1>
      <p>
        Find me in{' '}
        <code>./web/src/pages/LocationEditPage/LocationEditPage.js</code>
      </p>
      <p>
        My default route is named <code>locationEdit</code>, link to me with `
        <Link to={routes.locationEdit()}>LocationEdit</Link>`
      </p>
    </>
  )
}

export default LocationEditPage
