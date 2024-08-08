import './Sidebar.css';
import Logo from '../Logo';
import { useState } from 'react';
import { AiFillHome } from 'react-icons/ai';
import { RiBarChartBoxLine } from 'react-icons/ri';
import { BsClipboard2Check, BsBagCheck } from 'react-icons/bs';
import { CiWallet } from 'react-icons/ci';
import { RiLogoutCircleRLine } from "react-icons/ri";
import { Link } from 'react-router-dom';

function Sidebar() {
  const [activeIcon, setActiveIcon] = useState('home');

  const handleIconClick = (iconName) => {
    setActiveIcon(iconName);
  };

  return (
    <div className="sidebar">
      <div className="logo-container"><Logo size={'30px'} /></div>

      <div className="navigation-icons">
        <Link
          to="/"
          className={`icon-container ${activeIcon === 'home' ? 'active' : ''}`}
          onClick={() => handleIconClick('home')}
        >
          <AiFillHome />
        </Link>

        <Link
          to="/"
          className={`icon-container ${activeIcon === 'graph' ? 'active' : ''}`}
          onClick={() => handleIconClick('graph')}
        >
          <RiBarChartBoxLine />
        </Link>

        <Link
          to="/"
          className={`icon-container ${activeIcon === 'clipboard' ? 'active' : ''}`}
          onClick={() => handleIconClick('clipboard')}
        >
          <BsClipboard2Check />
        </Link>

        <Link
          to="/"
          className={`icon-container ${activeIcon === 'wallet' ? 'active' : ''}`}
          onClick={() => handleIconClick('wallet')}
        >
          <CiWallet />
        </Link>

        <Link
          to="/"
          className={`icon-container ${activeIcon === 'bagcheck' ? 'active' : ''}`}
          onClick={() => handleIconClick('bagcheck')}
        >
          <BsBagCheck />
        </Link>
      </div>

      <div className="logout-icon-container">
        <Link to="/" className="icon-container">
          <RiLogoutCircleRLine />
        </Link>
      </div>

    </div>
  );
}

export default Sidebar;