import quoteIcon from '../public/images/svg/quote.svg';
import Image from 'next/image';

const Testimonials = () => {
  return (
    <div className="container">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">
            <Image
              className="img-fluid pe-2"
              src={quoteIcon}
              alt="quote"
              width={40}
              height={20}
              priority
            />
            Testimonials
          </h5>
          <p className="card-text lh-lg">
            In a fast growing and ever changing city like Bangalore, it
            sometimes becomes very difficult to find or connect with like minded
            people. Websites like hobbycue.com is a great service which helps me
            get in touch with, communicate, connect, and exchange ideas with
            other dancers. It also provides the extra benefit of finding
            products and services that I can avail, which I can be assured is
            going to be of great quality as it comes recommended by people of
            the hobbycue community. To have discussions, to get visibility, and
            to be able to safely explore various hobbies and activities in my
            city, all under one roof, is an excellent idea and I highly
            recommend it.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
