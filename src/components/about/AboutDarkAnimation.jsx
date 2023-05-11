import React from "react";
// import Skills from "../skills/SkillsAnimation";

const AboutDarkAnimation = () => {
  return (
    <>
      <div className="about_inner">
        <div className="left">
          <img src="img/thumbs/1-1.jpg" alt="" />
          <div
            className="image"
            data-aos="fade-right"
            data-aos-duration="1200"
            style={{
              backgroundImage: `url(${
                process.env.PUBLIC_URL + "img/about/phil_animated.png"
              })`,
            }}
          ></div>
        </div>
        <div
          className="right"
          data-aos="fade-right"
          data-aos-duration="1200"
          data-aos-delay="50"
        >
          <div className="short">
            <h3>I'm Philip Okumu</h3>
            <h5>
              A <span className="theme-color">Software Developer </span>
              based in <span className="theme-color">Nairobi, Kenya</span>
            </h5>
            <p>I design and build software applicatiions</p>
          </div>
          <div className="extra">
            <h3 className="title">Personal Info</h3>
            <div className="list">
              <ul>
                <li>
                  <p>
                    <span>Name :</span> Philip Okumu
                  </p>
                </li>
                <li>
                  <p>
                    <span>Address :</span> Nairobi, Kenya
                  </p>
                </li>
                {/* <li>
                  <p>
                    <span>Age :</span> 21 Years
                  </p>
                </li> */}
                {/* <li>
                  <p>
                    <span>Nationality :</span> Kenyan
                  </p>
                </li> */}
                <li>
                  <p>
                    <span>Email :</span> philipo.okumu@gmail.com
                  </p>
                </li>
                <li>
                  <p>
                    <span>Phone :</span> +254 729 730 155
                  </p>
                </li>
                <li>
                  <p>
                    <span>Open for work :</span> Yes
                  </p>
                </li>
                <li>
                  <p>
                    <span>Languages :</span> English
                  </p>
                </li>
              </ul>
            </div>
            {/* End list */}
            <div className="beny_tm_button color-outline">
              <a href="img/about/Philip Okumu_Resume.pdf" download>
                <span className="wrapper">
                  <span className="first">Download CV</span>
                  <span className="second">Download CV</span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* <Skills /> */}
    </>
  );
};

export default AboutDarkAnimation;
