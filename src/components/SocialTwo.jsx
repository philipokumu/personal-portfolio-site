import React from "react";

const socialList = [
  {
    name: "TW.",
    link: "https://www.twitter.com/",
  },
  {
    name: "LI.",
    link: "https://www.linkedin.com/in/philip-okumu-b85a0465/",
  },
];

const SocialTwo = () => {
  return (
    <ul>
      {socialList.map((val, i) => (
        <li key={i}>
          <a href={val.link} target="_blank" rel="noreferrer">
            <span className="first">{val.name}</span>
            <span className="second">{val.name}</span>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default SocialTwo;
