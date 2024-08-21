import React from 'react';

function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="footer-up">
        <img src="../src/Images/logo.png" alt="" />
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore, cumque quibusdam libero quaerat nulla nam possimus ducimus maxime tenetur rerum voluptatum fugiat ipsam culpa non iusto? Voluptate illo natus quasi consectetur quod facere? Vitae?</p>
      </div>
      <div className="footer-down">
        <div className="part1" id="join">
          <h4>Information</h4>
          <p>About us</p>
          <p>Classes</p>
          <p>Blog</p>
          <p>Contact</p>
        </div>
        <div className="part2">
          <h4>Helpful Links</h4>
          <p>Services</p>
          <p>Supports</p>
          <p>Terms & Condition</p>
          <p>Privacy Policies</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
