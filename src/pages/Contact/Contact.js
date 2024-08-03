import React from "react";

const Contact = () => {
  return (
    <div className="body-wrapper space-pt--70 space-pb--120">
      <div className="contact-page-content">
        <div
          className="contact-page-content__image space-mb--80 bg-img"
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL +
              "/assets/img/contact.jpg"})`
          }}
        />
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="contact-page-content__text space-mb--25">
                <h3>Contact Information</h3>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration.
                </p>
              </div>
              <div className="contact-page-content__text-block space-mb--25">
                <h4>Address</h4>
                <p>
                  935-1670 Neque. St. <br />
                  Centennial Delaware 48432
                </p>
              </div>
              <div className="contact-page-content__text-block space-mb--25">
                <h4>Phone</h4>
                <p>
                  (+1) 2266 5556 999 <br />
                  (+1) 2236 5566 666
                </p>
              </div>
              <div className="contact-page-content__text-block space-mb--25">
                <h4>E-Mail</h4>
                <p>
                  demomail@example.com <br />
                  mail.demo@example.com
                </p>
              </div>
              <div className="contact-page-content__text-block">
                <h4>Map</h4>
                <div className="map-wrapper space-mt--20">
                  <iframe
                    title="map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6777.000026107364!2d-74.08304414937152!3d40.83212940017352!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2f866a80dcc27%3A0x3e3160910d4d5045!2sHoliday%20Inn%20Express%20%26%20Suites%20Meadowlands%20Area!5e0!3m2!1sen!2sbd!4v1581852597883!5m2!1sen!2sbd"
                    width={600}
                    height={450}
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
