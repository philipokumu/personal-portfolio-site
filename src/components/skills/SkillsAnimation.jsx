import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

// const educationContent = [
//   {
//     passingYear: "2020-2021",
//     degree: "Ph.D in Horriblensess ",
//     instituteName: "Harvard University, Cambridge, MA",
//   },
//   {
//     passingYear: "2018-2019",
//     degree: "Computer Science",
//     instituteName: "Imperialize Technical Institute",
//   },
//   {
//     passingYear: "2016-2018",
//     degree: "Graphic Designer",
//     instituteName: "Web Graphy, Los Angeles, CA",
//   },
// ];

const skillsContent1 = [
  {
    name: "HTML",
    skillPercent: "70",
  },
  {
    name: "PHP",
    skillPercent: "70",
  },
  {
    name: "Javascript",
    skillPercent: "65",
  },
  {
    name: "CSS",
    skillPercent: "65",
  },
  {
    name: "Java",
    skillPercent: "50",
  },
];

const skillsContent2 = [
  {
    name: "MySQL | Postgres",
    skillPercent: "80",
  },
  {
    name: "Laravel",
    skillPercent: "70",
  },
  {
    name: "Vue JS",
    skillPercent: "65",
  },
  {
    name: "React JS",
    skillPercent: "55",
  },
  {
    name: "Spring Boot",
    skillPercent: "50",
  },
];

const skillsContent3 = [
  {
    name: "REST",
    skillPercent: "80",
  },
  {
    name: "GIT",
    skillPercent: "75",
  },
  {
    name: "Test driven development",
    skillPercent: "75",
  },
  {
    name: "Apache | Nginx",
    skillPercent: "60",
  },
  {
    name: "Docker",
    skillPercent: "60",
  },
];

// const awardContent = [
//   {
//     awardYear: "2020",
//     degree: "Best Developer",
//     instituteName: "University Of Melbourne, NA",
//   },
//   {
//     awardYear: "2019",
//     degree: "Best Writter",
//     instituteName: "Online Typodev Soluation Ltd.",
//   },
//   {
//     awardYear: "2007",
//     degree: "Best Freelancer ",
//     instituteName: "Fiver & Upwork Level 2 & Top Rated",
//   },
// ];
const experienceContent = [
  {
    designation: "Full stack software developer",
    jobType: "Full Time | Remote",
    year: "2020 - Present",
    compnayName: "Consultancy | Freelance",
    descriptions:
      "I design and develop applications for customers specializing in creating stylish, modern websites",
    animationDealy: "",
  },
  {
    designation: "Web and software developer",
    jobType: "Full time | Office",
    year: "2016 - 2019",
    compnayName: "Research Tree Africa Ltd",
    descriptions:
      "I design and develop stylish websites for company clients. I also managed and maintained the company servers.",
    animationDealy: "200",
  },
  {
    designation: "Backend Developer",
    jobType: "Full Time | Office",
    year: "2015 - 2016",
    compnayName: "E-venture Enterprises Ltd",
    descriptions:
      "Draw up the business logic and create optimised applications for company customers",
    animationDealy: "",
  },
  {
    designation: "Jr. Web Developer",
    jobType: "Full Time | InHouse",
    year: "2014 - 2015",
    compnayName: "Empire Creations",
    descriptions:
      "Create intuitive and user friendly design websites for customers",
    animationDealy: "200",
  },
];

const SkillsAnimation = () => {
  return (
    <>
      <div className="beny_tm_resume">
        <div className="main_title">
          <h3>My Experience and Skills</h3>
        </div>
        <Tabs>
          <TabList className="tab_list">
            <Tab> Education & Skills</Tab>
            <Tab>Experience</Tab>
          </TabList>
          <TabPanel>
            {/* <div className="resume_inner"> */}
            <div className="row">
              <div
                className="col-4"
                data-aos="fade-right"
                data-aos-duration="1200"
              >
                <div className="skills ">
                  <h4>
                    <label>Languages</label>
                  </h4>
                  <div className="beny_progress">
                    {skillsContent1.map((val, i) => (
                      <div className="progress_inner" key={i}>
                        <span>
                          <span className="label">{val.name}</span>
                          {/* <span className="number">{val.skillPercent}%</span> */}
                        </span>
                        <div className="background">
                          <div className="bar open">
                            <div
                              className="bar_in"
                              style={{ width: val.skillPercent + "%" }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {/* End .col-4 */}

              <div
                className="col-4"
                data-aos="fade-right"
                data-aos-duration="1200"
                data-aos-delay="200"
              >
                <div className="skills ">
                  <h4>
                    <label>Frameworks & tools</label>
                  </h4>
                  <div className="beny_progress">
                    {skillsContent2.map((val, i) => (
                      <div className="progress_inner" key={i}>
                        <span>
                          <span className="label">{val.name}</span>
                          {/* <span className="number">{val.skillPercent}%</span> */}
                        </span>
                        <div className="background">
                          <div className="bar open">
                            <div
                              className="bar_in"
                              style={{ width: val.skillPercent + "%" }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {/* End .col-5 */}

              <div
                className="col-4"
                data-aos="fade-right"
                data-aos-duration="1200"
                data-aos-delay="400"
              >
                <div className="skills ">
                  <h4>
                    <label>Enviroment & Principles</label>
                  </h4>
                  <div className="beny_progress">
                    {skillsContent3.map((val, i) => (
                      <div className="progress_inner" key={i}>
                        <span>
                          <span className="label">{val.name}</span>
                          {/* <span className="number">{val.skillPercent}%</span> */}
                        </span>
                        <div className="background">
                          <div className="bar open">
                            <div
                              className="bar_in"
                              style={{ width: val.skillPercent + "%" }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {/* End .col-4 */}
            </div>
            {/* </div> */}
          </TabPanel>

          <TabPanel>
            <div className="row">
              {experienceContent.map((val, i) => (
                <div
                  className="col-6"
                  key={i}
                  data-aos="fade-right"
                  data-aos-duration="1200"
                  data-aos-delay={val.animationDealy}
                >
                  <div className="resume-box-01">
                    <h5>{val.designation}</h5>
                    <h6>{val.jobType}</h6>
                    <span>{val.year}</span>
                    <div className="hr"></div>
                    <h4>
                      <label>{val.compnayName}</label>
                    </h4>
                    <p>{val.descriptions}</p>
                  </div>
                </div>
                //  End .col
              ))}
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </>
  );
};

export default SkillsAnimation;
