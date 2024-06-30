import Image from 'next/image';
import fgray from '../public/images/svg/facebook-gray.svg';
import tweet from '../public/images/svg/tweet.svg';
import pin from '../public/images/svg/pinterest.svg';
import insta from '../public/images/svg/instagram.svg';
import explore from '../public/images/svg/explore.svg';
import styles from '../styles/Layout.module.css';

function Footer() {
  return (
    <div className="container-fluid mx-2">
      <div className="row">
        <div className="col-12 col-lg-3">
          <h5>hobbycue</h5>
          <p>About US</p>
          <p>our services</p>
          <p>work with us</p>
          <p>contact us</p>
          <p>FAQ</p>
        </div>
        <div className="col-12 col-lg-3">
          <h5>how do I</h5>
          <p>Add a listing</p>
          <p>claim listing</p>
          <p>post a query</p>
          <p>add a blog post</p>
          <p>other queries</p>
        </div>
        <div className="col-12 col-lg-3">
          <h5>quick links</h5>
          <p>listing</p>
          <p>blog post</p>
          <p>shop / store</p>
          <p>community</p>
        </div>

        <div className="col-12 col-lg-3">
          <h5>Social media</h5>
          <div className="d-flex justify-content-between">
            <p>
              <Image
                className="img-fluid pe-2"
                src={fgray}
                alt="fgray"
                width={25}
                height={20}
                priority
              />
            </p>
            <p>
              <Image
                className="img-fluid pe-2"
                src={tweet}
                alt="tweet"
                width={25}
                height={20}
                priority
              />
            </p>
            <p>
              <Image
                className="img-fluid pe-2"
                src={pin}
                alt="pin"
                width={25}
                height={20}
                priority
              />
            </p>
            <p>
              <Image
                className="img-fluid pe-2"
                src={explore}
                alt="xplore"
                width={25}
                height={20}
                priority
              />
            </p>
            <p>
              <Image
                className="img-fluid pe-2"
                src={insta}
                alt="insta"
                width={25}
                height={20}
                priority
              />
            </p>
          </div>
          <div>
            <h6>Invite friends</h6>
            <span className={styles.invite}>
              <input type="email" name="keyword" placeholder="Email" />
              <button className="text-small">Invite</button>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
