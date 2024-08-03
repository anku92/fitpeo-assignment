import './Sidebar.css';
import Logo from '../Logo';
import { useState } from 'react';
import { AiFillHome } from 'react-icons/ai';
import { RiBarChartBoxLine } from 'react-icons/ri';
import { BsClipboard2Check, BsBagCheck } from 'react-icons/bs';
import { CiWallet } from 'react-icons/ci';

function Sidebar() {
  const [activeIcon, setActiveIcon] = useState('home');

  const handleIconClick = (iconName) => {
    setActiveIcon(iconName);
  };

  return (
    <div className="sidebar">
      <div className="hero-logo-container">
        <Logo size={'30px'} />
      </div>

      <div className="navigation-icons">
        <div
          className={`icon-container ${activeIcon === 'home' ? 'active' : ''}`}
          onClick={() => handleIconClick('home')}
        >
          <AiFillHome />
        </div>

        <div
          className={`icon-container ${activeIcon === 'graph' ? 'active' : ''}`}
          onClick={() => handleIconClick('graph')}
        >
          <RiBarChartBoxLine />
        </div>

        <div
          className={`icon-container ${activeIcon === 'clipboard' ? 'active' : ''}`}
          onClick={() => handleIconClick('clipboard')}
        >
          <BsClipboard2Check />
        </div>

        <div
          className={`icon-container ${activeIcon === 'wallet' ? 'active' : ''}`}
          onClick={() => handleIconClick('wallet')}
        >
          <CiWallet />
        </div>

        <div
          className={`icon-container ${activeIcon === 'bagcheck' ? 'active' : ''}`}
          onClick={() => handleIconClick('bagcheck')}
        >
          <BsBagCheck />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;

