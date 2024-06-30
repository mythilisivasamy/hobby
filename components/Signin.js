import styles from '../styles/Layout.module.css';
import googleIcon from '../public/images/svg/google.svg';
import lockIcon from '../public/images/svg/lock.svg';
import facebookIcon from '../public/images/svg/facebook.svg';
import Image from 'next/image';
const Signin = () => {
  return (
    <>
      <p>
        <button className="btn btn-lg border border-dark rounded-3 w-100">
          <Image
            src={googleIcon}
            alt="GoogleIcon"
            width={50}
            height={20}
            priority
          />
          <span className="fw-bold fs-5">Continue with Google</span>
        </button>
      </p>
      <p>
        <button className="btn btn-lg border border-dark rounded-3 w-100">
          <Image
            src={facebookIcon}
            alt="facebookIcon"
            width={50}
            height={20}
            priority
          />{' '}
          <span className="fw-bold fs-5">Continue with Facebook</span>
        </button>
      </p>
      <div className="d-flex justify-content-start">
        <p className={styles.hrLine}></p>
        <p className="fw-bold fs-small px-2">Or Connect With</p>
        <p className={styles.hrLine}></p>
      </div>
      <div>
        <input
          class="form-control"
          type="email"
          placeholder="Email"
          aria-label="default input example"
        />
      </div>
      <div>
        <input
          class="form-control"
          type="password"
          placeholder="password"
          aria-label="default input example"
        />
      </div>
      <div className="d-flex justify-content-between">
        <p>
          <span className="me-2">
            <input
              className="form-check-input border-dark"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
          </span>
          Remember me
        </p>
        <p>
          <span className="me-1">
            <Image
              src={lockIcon}
              alt="lockIcon"
              width={20}
              height={20}
              priority
            />
          </span>
          Forgot Password?
        </p>
      </div>
      <div>
        <button className="btn btn-lg border border-dark rounded-3 w-100">
          <span className="fw-bolder fs-small">continue </span>
        </button>
      </div>
    </>
  );
};

export default Signin;
