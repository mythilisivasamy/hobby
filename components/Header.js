import Image from 'next/image';
import searchIcon from '../public/images/svg/search.svg';
import search2Icon from '../public/images/svg/search2.svg';
import exploreIcon from '../public/images/svg/explore.svg';
import vectorIcon from '../public/images/svg/vector.svg';
import hobbiesIcon from '../public/images/svg/Hobbies.svg';
import bookmarkIcon from '../public/images/svg/bookmark.svg';
import notificationIcon from '../public/images/svg/notification.svg';
import menuIcon from '../public/images/svg/menu_black.svg';
import cartIcon from '../public/images/svg/cart.svg';
import logo from '../public/images/logo.png';
import styles from '../styles/Layout.module.css';
const Header = () => {
  return (
    <div className="containter-fluid my-2">
      <div className="row ">
        <div className="col-8 col-lg-3 ">
          <Image
            className="img-fluid"
            src={logo}
            alt="Logo"
            width={293}
            height={60}
            priority
          />
        </div>
        <div className="col-lg-4 d-none d-lg-grid">
          <span className={styles.search}>
            <input type="text" name="keyword" placeholder="Search here..." />
            <button>
              <Image
                className="bg-info"
                priority
                src={searchIcon}
                alt="searchIcon"
              />
            </button>
          </span>
        </div>
        <div className="col-lg-5 d-none d-lg-grid ">
          <div className="d-flex justify-content-evenly pt-3">
            <div className="d-flex gap-2">
              <p>
                <Image priority src={exploreIcon} alt="exploreIcon" />
              </p>
              <p>Explore</p>
              <p>
                <Image
                  className="mt-1"
                  priority
                  src={vectorIcon}
                  alt="vectorIcon"
                />
              </p>
            </div>
            <div className="d-flex gap-2">
              <p>
                <Image priority src={hobbiesIcon} alt="hobbiesIcon" />
              </p>
              <p>Hobbies</p>
              <p>
                <Image
                  className="mt-1"
                  priority
                  src={vectorIcon}
                  alt="vectorIcon"
                />
              </p>
            </div>
            <div>
              <Image priority src={bookmarkIcon} alt="bookmarkIcon" />
            </div>
            <div>
              <Image priority src={notificationIcon} alt="notificationIcon" />
            </div>
            <div>
              <Image priority src={cartIcon} alt="cartIcon" />
            </div>
            <div>
              <button className={styles.btnSmall}>
                <span className="fw-bold">Sign In</span>
              </button>
            </div>
          </div>
        </div>
        <div className="col-4 d-lg-none px-2">
          <div className="d-flex justify-content-between px-2">
            <div>
              <Image priority src={search2Icon} alt="search2Icon" />
            </div>
            <div>
              <Image priority src={notificationIcon} alt="notificationIcon" />
            </div>
            <div>
              <Image priority src={menuIcon} alt="menuIcon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
