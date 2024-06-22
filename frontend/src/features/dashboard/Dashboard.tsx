import './Dashboard.scss';
import Logo from '../../assets/svg/logo.svg';
import SearchIcon from '../../assets/svg/search-icon.svg';
import BellIcon from '../../assets/svg/Bell.svg';
import DropDownIcon from '../../assets/svg/dropdown.svg';
import Avatar from '../../assets/image/avatar.png';
import LogoutIcon from '../../assets/svg/logout.svg';
import { useRef, useState } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import { AiOutlineClose } from 'react-icons/ai';
import { IoDocumentTextOutline } from 'react-icons/io5';
import Sidebar from '../sidebar/Sidebar';
import { Tooltip } from 'react-tooltip';
import { BsThreeDotsVertical } from 'react-icons/bs';
import Users from '../users/Users';
import ProfileIcon from '../../assets/svg/profile.svg';
import DocsIcon from '../../assets/svg/docs.svg';
import BellIcon2 from '../../assets/svg/bell2.svg';
import useWindowResize from '../../hooks/useWindowResize';
import Filter from '../../common/filter/Filter';
import useClickOutside from '../../hooks/useClickOutside';




const SearchBar = () => (
  <div className="search-bar">
    <input type="text" placeholder='Search for anything' />
    <button className="search-bar-icon">
      <SearchIcon />
    </button>
  </div>
);


const ProfileMenu = (showProfileMore: boolean, setShowProfileMore: (show: boolean) => void) => {
  const profileMenuRef = useRef<HTMLDivElement>(null);
  useClickOutside(profileMenuRef, () => setShowProfileMore(false));

  return (
    <div
      ref={profileMenuRef}
      onMouseLeave={() => setShowProfileMore(false)}
      show-more={showProfileMore ? 'true' : 'false'}
      className="profile-more"
    >
      <div className="profile-name">
        <p>Adedeji Bergson</p>
      </div>
      <button onClick={() => setShowProfileMore(false)}><ProfileIcon /><p> View your profile</p></button>
      <button onClick={() => setShowProfileMore(false)}><BellIcon2 /><p> Notifications</p></button>
      <button onClick={() => setShowProfileMore(false)}><DocsIcon /><p> Docs</p></button>
      <button onClick={() => setShowProfileMore(false)} ><LogoutIcon /><p>Log out</p></button>
    </div>
  );
};

const Dashboard = () => {
  const [showMobileNav, setShowMobileNav] = useState(false);
  const [showProfileMore, setShowProfileMore] = useState(false);
  const [showFilter, setShowFilter] = useState(false);
  const { width } = useWindowResize();

  const handleMobileNav = () => {
    setShowMobileNav(prev => !prev);
  };

  const handleFilter = () => {
    setShowFilter(prev => !prev)
}



  return (
    <main className='dashboard-cont'>
      {width! <= 530 && showFilter ? <Filter handleFilter={handleFilter}/> : <><header>
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

        <button onClick={() => setShowProfileMore((prev) => !prev)} className='more-icon'>
          <BsThreeDotsVertical />
        </button>

        {ProfileMenu(showProfileMore, setShowProfileMore)}

      </header><div className="dashboard-bdy">
          <Sidebar showMobileNav={showMobileNav} />
          <Users showFilter={showFilter} handleFilter={handleFilter} />
        </div></>}
    </main>
  );
};

export default Dashboard;