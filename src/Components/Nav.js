import Logo from '../assets/Logo.svg';
import { Link } from 'react-router-dom';

function Nav(props) {
  return (
    <menu className={`navbar ${props.device}`}>
        {props.device === "mobile" ? (
            ""
        ):(
            <Link to="/"><img src={Logo} alt='Logo of Little Lemon' className='nav-logo'/></Link>
        )}
        <Link className='hover-effect' to="/"><h5>Home</h5></Link>
        <Link className='hover-effect' to="/About"><h5>About</h5></Link>
        <Link className='hover-effect' to="/Menu"><h5>Menu</h5></Link>
        <Link className='hover-effect' to="/Reservations"><h5>Reservations</h5></Link>
        <Link className='hover-effect' to="/Order-Online"><h5>Order Online</h5></Link>
        <Link className='hover-effect' to="/Login"><h5>Login</h5></Link>
    </menu>
  )
}

export default Nav