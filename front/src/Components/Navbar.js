import React, { useContext} from 'react';
import { Context } from '../hookAndContext/context';
import { Link } from 'react-router-dom'

const Navbar = (props) => {
const theContext = useContext(Context)
const {currentUser, logOut} = theContext

const handleLogOut = (event) => {
  event.preventDefault();
  logOut()
}

return(
<nav className="navbar navbar-expand-lg navbar-light bg-light">
<a className="navbar-brand" href="#">TheBonsaiCare</a>
<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
  <span className="navbar-toggler-icon"></span>
</button>
<div className="collapse navbar-collapse" id="navbarNav">
   
    {currentUser ? 
      <ul className="navbar-nav">
      <li><button onClick={e => handleLogOut(e)}>Logout</button></li>
      <li><Link to='/dashboard'>Dashboard</Link></li>
      <li><Link to='/search'>Search</Link></li>
      <li><Link to='/inbox'>Inbox</Link></li>
      {currentUser.careProfile === null ? <li><Link to='caresignup'>Become a carer</Link></li> : null}
      </ul> : <ul className="navbar-nav">
      <Link to='/signup' className='nav-link'>Signup</Link>
      <Link to='/login' className='nav-link'>Login</Link>
      </ul>}

</div>
</nav>)
}

export default Navbar