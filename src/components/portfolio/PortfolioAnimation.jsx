import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import SimpleReactLightbox from "simple-react-lightbox";
import { SRLWrapper } from "simple-react-lightbox";

const Portfolio = () => {
  const [isOpen, setOpen] = useState(false);
  const [isOpen2, setOpen2] = useState(false);
  return (
    <SimpleReactLightbox>
      <div className="portfolio_list">
        <ul className="gallery_zoom">
          <ModalVideo
            channel="youtube"
            autoplay
            isOpen={isOpen}
            videoId="1gyTUHP6ne8"
            onClose={() => setOpen(false)}
          />
          {/* End Youtube Modal video */}

          <ModalVideo
            channel="vimeo"
            autoplay
            isOpen={isOpen2}
            videoId="100171151"
            onClose={() => setOpen2(false)}
          />
          {/* End Youtube Modal video */}

          <li data-aos="fade-right" data-aos-duration="1200">
            <div className="list_inner video">
              <a
                href="https://github.com/philipokumu/mv-commerce-client"
                target="_blank"
                rel="noopener noreferrer"
                className="title"
              >
                <h3>Full Ecommerce System</h3>
                <span>Made with Nuxt JS and Laravel</span>
              </a>
              <img
                src="img/portfolio/multi_ecommerce.png"
                alt="Full Ecommerce System"
                // onClick={() => setOpen(true)}
              />
            </div>
          </li>
          {/* End youtube */}
          <li
            data-aos="fade-right"
            data-aos-duration="1200"
            data-aos-delay="100"
          >
            <div className="list_inner video">
              <a
                href="https://github.com/philipokumu/amacedic"
                target="_blank"
                rel="noopener noreferrer"
                className="title"
              >
                <h3>Document Exchange System </h3>
                <span>Made with Laravel and Bootstrap</span>
              </a>
              <img
                src="img/portfolio/document_exchange.png"
                alt="Document Exchange System"
                // onClick={() => setOpen2(true)}
              />
            </div>
          </li>
          {/* End vimeo */}

          <SRLWrapper>
            <li
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="200"
            >
              <div className="list_inner">
                <a
                  className="title"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/philipokumu/spring-boot-chat-application"
                >
                  <h3>Chat Application</h3>
                  <span>Made with Spring boot</span>
                </a>

                <a href="img/portfolio/Chat_springboot.png">
                  <img
                    src="img/portfolio/Chat_springboot.png"
                    alt="Chat Application"
                  />
                </a>
              </div>
            </li>
            {/* End image popup */}

            <li
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="300"
            >
              <div className="list_inner">
                <a
                  className="title"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/philipokumu/hr-policy-management-system"
                >
                  <h3>HR Management System</h3>
                  <span>Made with Laravel Livewire</span>
                </a>

                <a href="img/portfolio/Hr-System.jpg">
                  <img
                    src="img/portfolio/Hr-System.jpg"
                    alt="HR Management System"
                  />
                </a>
              </div>
            </li>
            {/* End image popup */}

            <li
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="400"
            >
              <div className="list_inner">
                <a
                  className="title"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/philipokumu/styled-react/tree/main"
                >
                  <h3>React template</h3>
                  <span>Simplistic modern style template made with React</span>
                </a>

                <a href="img/portfolio/React_template.png">
                  <img
                    src="img/portfolio/React_template.png"
                    alt="React template"
                  />
                </a>
              </div>
            </li>
            {/* End image popup */}

            <li
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="500"
            >
              <div className="list_inner">
                <a
                  className="title"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/philipokumu/corona-virus-tracker"
                >
                  <h3>Covid 19 Tracker</h3>
                  <span>Made with Springboot</span>
                </a>

                <a href="img/portfolio/covid-19-tracker.png" target="_blank">
                  <img
                    src="img/portfolio/covid-19-tracker.png"
                    alt="Covid-19 tracker"
                  />
                </a>
              </div>
            </li>
            {/* End image popup */}
          </SRLWrapper>
        </ul>
      </div>
    </SimpleReactLightbox>
  );
};

export default Portfolio;
