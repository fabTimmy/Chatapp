import { NavLink } from 'react-router-dom'

const PageNotFound = () => {
  return (
    <div className='notFound'>
        <h1>404</h1>
        <div className="not-found-img"></div>
        <div className="not-found-text">
        <h2>Looks like you're lost</h2>
        <h4>the page you're looking for is not available</h4>
        <NavLink to='/' className="not-found-btn">Go Home</NavLink>
        </div>
    </div>
  )
}

export default PageNotFound