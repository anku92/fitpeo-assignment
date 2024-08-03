import { FiSearch } from 'react-icons/fi';
import { MdOutlineEmail } from 'react-icons/md';
import { IoSettingsOutline, IoNotificationsOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header__left">
        <div className="header__search">
          <input type="text" name="search" className="header__search-input" placeholder="Search" />
          <FiSearch className="header__search-icon" />
        </div>
      </div>

      <div className="header__right">
        <div className="header__icons">
          <Link to="/" className="header__icon-container">
            <MdOutlineEmail className="header__icon" />
          </Link>
          <Link to="/" className="header__icon-container">
            <IoSettingsOutline className="header__icon" />
          </Link>
          <Link to="/" className="header__icon-container header__icon-container--notification">
            <IoNotificationsOutline className="header__icon" />
            <div className="header__notification-dot"></div>
          </Link>
        </div>

        <div className="header__profile">
          <img src="https://placehold.co/800/navy/yellow.png?text=John&font=roboto" className="header__profile-picture" alt="Profile" />
        </div>
      </div>
    </header>
  );
}

export default Header;