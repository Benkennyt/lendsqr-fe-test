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
import Sidebar from '../sidebar/Sidebar';
import { Tooltip } from 'react-tooltip';
import { BsThreeDotsVertical } from 'react-icons/bs';
import Users from '../users/Users';


const SearchBar = () => (
  <div className="search-bar">
    <input type="text" placeholder='Search for anything' />
    <button className="search-bar-icon">
      <SearchIcon />
    </button>
  </div>
);

const Dashboard = () => {
  const [showMobileNav, setShowMobileNav] = useState(false);

  const handleMobileNav = () => {
    setShowMobileNav(prevState => !prevState);
  };

  return (
    <main className='dashboard-cont'>
      <header>
        <div className="logo">
          <Logo />
          <button
            onClick={handleMobileNav}
            className='mobile-nav-toggle'
            aria-controls='sidebar'
            aria-expanded={showMobileNav ? 'true' : 'false'}
          >
            {!showMobileNav ? <RxHamburgerMenu /> : <AiOutlineClose />}
          </button>
        </div>

        <SearchBar />

        <div className="hdn-right-side-cont">
          <div className="docs">
            <a href="#">Docs</a>
            <button
              data-tooltip-id="doc-tooltip"
              data-tooltip-content="documents"
              data-tooltip-place="top"
            >
              <IoDocumentTextOutline />
              <Tooltip id="doc-tooltip" />
            </button>
          </div>
          <div
            data-tooltip-id="notis-tooltip"
            data-tooltip-content="notifications"
            data-tooltip-place="top"
            className="notification-icon"
          >
            <BellIcon />
            <Tooltip id="notis-tooltip" />
          </div>
          <div className="profile">
            <img src={Avatar} alt="User avatar" />
            <p>Adedeji</p>
            <DropDownIcon />
          </div>
        </div>

        <button className='more-icon'>
          <BsThreeDotsVertical />
        </button>
      </header>

      <div className="dashboard-bdy">
        <Sidebar showMobileNav={showMobileNav} />
        <Users/>
      </div>
    </main>
  );
};

export default Dashboard;