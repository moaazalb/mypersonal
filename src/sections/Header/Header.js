import './Header.css'

import Logo from '../../components/Header  comp/Logo/Logo'
import Navbar from '../../components/Header  comp/Navbar/Navbar'
import Social from '../../components/Header  comp/Social/Social'

const Header = () => {
   
    return (
        <header id="header" className="fixed-top">
         <div className="container-fluid d-flex justify-content-between align-items-center">

          <Logo/>
          <Navbar/>
          <Social/>

         </div>
        </header>


    )
}

export default Header