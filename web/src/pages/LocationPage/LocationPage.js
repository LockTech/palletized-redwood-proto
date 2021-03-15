import { Link, routes } from '@redwoodjs/router'

const LocationPage = () => {
  return (
    <>
      <h1>LocationPage</h1>
      <p>
        Find me in <code>./web/src/pages/LocationPage/LocationPage.js</code>
      </p>
      <p>
        My default route is named <code>location</code>, link to me with `
        <Link to={routes.location()}>Location</Link>`
      </p>
    </>
  )
}

export default LocationPage
