import styles from '../styles/Layout.module.css';
import locationIcon from '../public/images/svg/location.svg';
import basketIcon from '../public/images/svg/basket.svg';
import eventIcon from '../public/images/svg/event.svg';
import groupIcon from '../public/images/svg/group.svg';
import addIcon from '../public/images/svg/add.svg';
import Image from 'next/image';

const Section1 = () => {
  return (
    <div className="container bg-light mt-5">
      <div className="row mb-2">
        <div className="col col-lg-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">
                <Image
                  className="img-fluid pe-2"
                  src={groupIcon}
                  alt="group"
                  width={40}
                  height={20}
                  priority
                />
                People
              </h5>
              <p className="card-text">
                Find a teacher, coach, or expert for your hobby interest in your
                locality. Find a partner, teammate, accompanist or collaborator.
              </p>
              <button className={styles.btnSmall}>
                <span className="fw-bold">connect</span>
              </button>
            </div>
          </div>
        </div>
        <div className="col col-lg-6">
          <div className="card">
            <div class="card-body">
              <h5 class="card-title">
                <Image
                  className="img-fluid pe-2"
                  src={locationIcon}
                  alt="location"
                  width={40}
                  height={20}
                  priority
                />
                Place
              </h5>
              <p class="card-text">
                Find a class, school, playground, auditorium, studio, shop or an
                event venue. Book a slot at venues that allow booking through
                hobbycue.
              </p>
              <button className={styles.btnSmall}>
                <span className="fw-bold">Meetup</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="row mb-2">
        <div className="col col-lg-6">
          <div className="card">
            <div class="card-body">
              <h5 class="card-title">
                <Image
                  className="img-fluid pe-2"
                  src={basketIcon}
                  alt="basket"
                  width={40}
                  height={20}
                  priority
                />
                Product
              </h5>
              <p class="card-text">
                Find equipment or supplies required for your hobby. Buy, rent or
                borrow from shops, online stores or from community members.
              </p>
              <button className={styles.btnSmall}>
                <span className="fw-bold">Get It</span>
              </button>
            </div>
          </div>
        </div>
        <div className="col col-lg-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">
                <Image
                  className="img-fluid pe-2"
                  src={eventIcon}
                  alt="event"
                  width={40}
                  height={20}
                  priority
                />
                Program
              </h5>
              <p class="card-text">
                Find events, meetups and workshops related to your hobby.
                Register or buy tickets online.
              </p>
              <button className={styles.btnSmall}>
                <span className="fw-bold">Attend</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container mb-2">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">
              <Image
                className="img-fluid pe-2"
                src={addIcon}
                alt="add"
                width={40}
                height={20}
                priority
              />
              Add Your Own
            </h5>
            <p className="card-text lh-lg">
              Are you a teacher or expert? Do you sell or rent out equipment,
              venue or event tickets? Or, you know someone who should be on
              hobbycue? Go ahead and Add your Own page
            </p>
          </div>
          <button className={styles.btnSmall}>
            <span className="fw-bold">Add new</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Section1;
