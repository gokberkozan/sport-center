import React from 'react';

function ContactSection() {
  return (
    <section>
      <section className="part-4" id="review">
        <section className="part-4-up">
          <div className="revtext">
            <br />
            <h1>REVIEW CLIENT</h1>
            <p style={{ textAlign: 'center' }}>---------</p>
            <p style={{ textAlign: 'center' }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet dolor deleniti reiciendis vel doloremque! Minima non, odit sunt iste et autem soluta consequatur vel nisi, odio expedita eum, dolore eaque corrupti repellendus?</p>
          </div>
          <div className="review-container">
            <div className="review-item">
              <div className="together">
                <img src="../src/Images/client1.jpg" alt="Client 1" />
                <div className="review-text">
                  <p>Diet Expert</p>
                  <p>CFO</p>
                </div>
              </div>
              <div className="message-balloon">
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus architecto voluptates corrupti debitis voluptas officia veritatis voluptatum reprehenderit!</p>
              </div>
            </div>
            <div className="review-item">
              <div className="together">
                <img src="../src/Images/client2.jpg" alt="Client 2" />
                <div className="review-text">
                  <p>Cardio Trainer</p>
                  <p>CEO</p>
                </div>
              </div>
              <div className="message-balloon">
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus architecto voluptates corrupti debitis voluptas officia veritatis voluptatum reprehenderit!</p>
              </div>
            </div>
          </div>
          <br />
        </section>

        <section className="part-4-down" id="contact">
          <h1 style={{ textAlign: 'center' }}>CONTACT US</h1>
          <p style={{ textAlign: 'center' }}>---------</p>
          <p style={{ textAlign: 'center' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

          <div className="text-map">
            <div className="texts">
              <div className="comtext">
                <p>Mobile Number <br /> +0535 555 6666</p>
                <p>Email Address <br /> kodluyoruz@patika.dev</p>
              </div>
              <h3>Make An Appoinment</h3>
              <div className="inputs">
                <input type="text" id="name" placeholder="Your Name" />
                <input type="email" id="email" placeholder="Your Email" />
                <input type="text" id="address" placeholder="Your Address" />
              </div>
              <br />
            </div>
            <iframe
              width="400"
              height="350"
              style={{ border: '0', margin: '0 auto', display: 'block' }}
              loading="lazy"
              allowFullScreen
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.0308947739943!2dYOUR_LONGITUDE!3dYOUR_LATITUDE!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3AYOUR_PLACE_NAME!2sYOUR_PLACE_NAME!5e0!3m2!1sen!2sus!4v1567609050964!5m2!1sen!2sus"
            ></iframe>
          </div>
          <br /><br />
        </section>
      </section>
    </section>
  );
}

export default ContactSection;
