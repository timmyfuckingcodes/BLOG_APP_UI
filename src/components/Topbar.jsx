import "./topbar.css"
import {Link} from "react-router-dom"

function Topbar() {
  const user = true;
  return (
    <div className='top'>
      <div className="topLeft">
      <i className="topIcon fa-brands fa-square-facebook"></i>
      <i  className="topIcon fa-brands fa-square-twitter"></i>
      <i className="topIcon fa-brands fa-tiktok"></i>
      <i className="topIcon fa-brands fa-square-instagram"></i>
      </div>
      <div className="topCenter">
        <ul className="topList" >
          <li className="topListItem" >
            <Link to="/" className="link">HOME</Link>
          </li>
          <li className="topListItem" >
          <Link to="/about" className="link">ABOUT</Link>
          </li>
          <li className="topListItem" >
          <Link to="/" className="link">CONTACT</Link>
          </li>
          <li className="topListItem" >
          <Link to="/write" className="link">WRITE</Link>
          </li>
          <li className="topListItem" >
          {user &&  "LOGOUT"}
          </li>
        </ul>
      </div>
      <div className="topRight">
      {
        user ?(
          <img className="topImage"
         src="https://images.pexels.com/photos/1689731/pexels-photo-1689731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
         alt=""/>
        ) : (
          <>
          <ul className="topList" >
          <li className="topListItem" >
          <Link to="/login" className="link">LOGIN</Link>
          </li>
          <li className="topListItem" >
          <Link to="/register" className="link">REGISTER</Link>
          </li>
          </ul>
          </>
        )}
         <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  )
}

export default Topbar