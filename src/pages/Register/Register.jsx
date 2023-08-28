import './Register.css'
import{Link} from "react-router-dom";

export default function Register() {
  return (
    <div className='login'>
    <span className='loginTitle'> Register </span>
       <form className='loginForm'>
    <label>Username</label>
    <input  type='username' placeholder='Enter your Username' />
    <label>Email</label>
    <input  type='email' placeholder='Enter your email' />
    <label>Password</label>
    <input  type='password' placeholder='Enter your password' />
   
     <button className='loginButton'>Register</button>
    </form>
    <button className='loginRegisterButton'>
    <Link to="/login" className="link">LOGIN</Link>
    </button>
</div>
  )
}


