import './Dashboard.scss';
import { useState, useRef } from 'react';
import Sidebar from '../sidebar/Sidebar';
import Users from '../users/Users';
import useWindowResize from '../../hooks/useWindowResize';
import Filter from '../../common/filter/Filter';
import Header from '../../app/general/Header';
const Dashboard = () => {
  const [showMobileNav, setShowMobileNav] = useState(false);
  const [showFilter, setShowFilter] = useState(false);
  const { width } = useWindowResize();
  const Topref = useRef<HTMLDivElement>(null);

  

  const handleFilter = () => {
    setShowFilter(prev => !prev);
  };

  const handleMobileNav = () => {
    setShowMobileNav(prev => !prev);
  };

  return (
    <main className='dashboard-cont'>
      <Header handleMobileNav={handleMobileNav} showMobileNav={showMobileNav}/>
      <div className="dashboard-bdy">
        <Sidebar showMobileNav={showMobileNav} />
        {width! <= 530 && showFilter ? (
          <Filter handleFilter={handleFilter} />
        ) : (
          <Users Topref={Topref} showFilter={showFilter} handleFilter={handleFilter} />
        )}
      </div>
    </main>
  );
};

export default Dashboard;
