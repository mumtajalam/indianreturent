import React from "react";

const Footer = () => {
  return (
    <footer id="footer" className="footer">
      <div className="container">
        <div className="row gy-3">
          <div className="col-lg-3 col-md-6 d-flex">
            <i className="bi bi-geo-alt icon"></i>
            <div>
              <h4>COMPANY</h4>
              <p>About us</p>
              <p>Team</p>
              <p>Careers</p>
              <p>FoodCart Blog</p>
              <p>Bug Bounty</p>
              <p>FoodCart One</p>
              <p>FoodCart Corporate</p>
              <p>FoodCart Instamart</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 footer-links d-flex">
            <i className="bi bi-telephone icon"></i>
            <div>
              <h4>Reservations</h4>
              <p>
                <strong>Phone:</strong> +1 5589 55488 55
                <strong>Email:</strong> info@example.com
              </p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 footer-links d-flex">
            <i className="bi bi-clock icon"></i>
            <div>
              <h4>Opening Hours</h4>
              <p>
                <strong>Mon-Sat: 11AM</strong> - 23PM Sunday: Closed
              </p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 footer-links">
            <h4>LEGAL</h4>
            <p>Terms & Conditions</p>
            <p>Refund & Cancellation</p>
            <p>Privacy Policy</p>
            <p>Cookie Policy</p>
            <p>Offer Terms</p>
            <p>Phishing & Fraud</p>
            <p>Corporate – Swiggy Money Codes Terms and Conditions</p>
            <p>Corporate - Swiggy Discount Voucher Terms and Conditions</p>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="copyright">
          &copy; Copyright{" "}
          <strong>
            <span>IndiaFood</span>
          </strong>
          . All Rights Reserved
        </div>
        <div className="credits">
          Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
