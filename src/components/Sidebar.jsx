import './sidebar.css'

export default function Sidebar() {
  return (
    <div className='sidebar'>
     <div className='sidebarItem'>
        <span className='sidebarTitle'>ABOUT ME</span>
        <img className='sidebarImage'   src='https://img.freepik.com/free-photo/african-woman-posing-looking-up_23-2148747978.jpg?w=360&t=st=1692864481~exp=1692865081~hmac=e02238040b665f4e15b146f298e77061635a3fce08e9976367649eb561ab0d6f' alt='' />
        <p>Lorem ipsum is hggnnbmbmbmbmbm bjbjbjgjg jjvmvmnvmv nnnvnvmvm mnvnvnvnvnv nvnvnvnvn nvnvnvnv nvvnnvnvn nvvnvnvnnv 
         nnfnfnn  nfnfnnf fnfnfnfn fnfnnfnf nfnfnn nnfnnf nfnfnfn nfnnn jjjjfjjfjfjf jnfjff nfnnf nfnnfn nnfnnfnf nnfnfnn</p></div>
    <div className='sidebarItem'>
      <span className='sidebarTitle'>CATEGORIES</span>
      <ul className='sidebarList'>
       <li className='sidebarListItem'>Life </li>
       <li className='sidebarListItem'>Music </li>
       <li className='sidebarListItem'>Style </li>
       <li className='sidebarListItem'>Sport </li>
       <li className='sidebarListItem'>Tech </li>
       <li className='sidebarListItem'>Cinema </li>
       </ul>
    </div>
    <div className='sidebarItem'>
     <span className='sidebarTitle'>FOLLOW US</span>
      <div className='sidebarSocial'>
       <i className="sidebarIcon fa-brands fa-square-facebook"></i>
       <i  className="sidebarIcon fa-brands fa-square-twitter"></i>
       <i className="sidebarIcon fa-brands fa-tiktok"></i>
       <i className="sidebarIcon fa-brands fa-square-instagram"></i>
      </div>
    </div>
    </div>
  )
}
