import Sidebar from '../../components/Sidebar'
import './Settings.css'

export default function Settings() {
  return (
    <div className='settings'>
    <div className='settingsWrapper'>
      <div className='settingsTitle'>
         <span className='settingsUpdateTitle'>Update Your Account</span>
         <span className='settingsDeleteTitle'>Delete Account</span>
      </div>
      <form className='settingsForm'>
      <label>Profile Picture</label>
      <div className='settingsPP'>
       <img 
        src=''
        alt=''
       />
       <label htmlFor='fileInput'>
        <i className='settingsIcon far fa-user-circle'></i>
       </label>
       <input type='file' id='fileInput' style ={{display: 'none'}} />
      </div>
      <label>Username</label>
      <input type='text' placeholder='username' />
      <label>Email</label>
      <input type='email' placeholder='email' />
      <label>Password</label>
      <input type='password' placeholder='password' />
      <label>Blog ID</label>
      <input type='ID' placeholder='BLOG ID' />
      <button className='settingsSubmit'>Update</button>
    
      </form>
    </div>
    <Sidebar />
    </div>
  )
}
