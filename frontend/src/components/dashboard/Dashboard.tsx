import './Dashboard.scss';
import Logo from '../../assets/svg/logo.svg';
import SearchIcon from '../../assets/svg/search-icon.svg';
import BellIcon from '../../assets/svg/Bell.svg';
import DropDownIcon from '../../assets/svg/dropdown.svg';
import Avatar from '../../assets/image/avatar.png';
import { useState } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import { AiOutlineClose } from 'react-icons/ai';
import { IoDocumentTextOutline } from 'react-icons/io5';
import LogoSign from '../../assets/svg/logosign.svg'
import Sidebar from '../sidebar/Sidebar';
// import Icon from '../../assets/svg/';




const Dashboard = () => {
    const [showMobileNav, setShowMobileNav] = useState(false);

    const handleMobileNav = () => {
        setShowMobileNav(prevState => !prevState);
      }
    return (
        <main className='dashboard-cont'>
            
            <header>
                <div className="logo">
                    <Logo />
                    <LogoSign/>
                </div>

                <div className="search-bar">
                    <input type="text" placeholder='Search for anything' />
                    <button className="search-bar-icon">
                        <SearchIcon />
                    </button>
                </div>

               

                <div className="hdn-right-side-cont">
                    
                    <div className="docs">
                        <a href="">Docs</a>
                        <button>
                            <IoDocumentTextOutline/>
                        </button>
                    </div>
                    <div className="notification-icon">
                        <BellIcon />
                    </div>
                    <div className="profile">
                        <img src={Avatar} alt="" />
                        <p>Adedeji</p>
                        <DropDownIcon />
                    </div>
                </div>

                <button onClick={handleMobileNav} className='mobile-nav-toggle' aria-controls='sidebar' aria-expanded={showMobileNav ? 'true' : 'false'}>
                
          {!showMobileNav ? <RxHamburgerMenu/> :
          <AiOutlineClose />}
                </button>
            </header>

            <div className="dashboard-bdy">
                
                <Sidebar showMobileNav={showMobileNav}/>
                <div className="search-bar">
                    <input type="text" placeholder='Search for anything' />
                    <button className="search-bar-icon">
                        <SearchIcon />
                    </button>
                </div>

                <div className="dashboard-display"></div>

            </div>
        </main>
    )
}

export default Dashboard