const Footer = () => {
  return (
    <footer>
      <div className="footer_container">
        <div className="footer_column">
          <h3>ONLINE SHOPPING</h3>
          <a href="#">Men</a>
          <a href="#">Women</a>
          <a href="#">Kids</a>
          <a href="#">Home & Living</a>
          <a href="#">Beauty</a>
        </div>

        <div className="footer_column">
          <h3>CUSTOMER SERVICE</h3>
          <a href="#">Contact Us</a>
          <a href="#">Track Order</a>
          <a href="#">Return Order</a>
          <a href="#">Cancel Order</a>
          <a href="#">FAQ</a>
        </div>

        <div className="footer_column">
          <h3>ABOUT US</h3>
          <a href="#">Our Story</a>
          <a href="#">Careers</a>
          <a href="#">Press</a>
          <a href="#">Corporate Information</a>
          <a href="#">Investor Relations</a>
        </div>
      </div>
      <hr />

      <div className="copyright">
        © 2023 www.myntra.com. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
