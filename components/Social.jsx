import Link from "next/link";

import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const socialsMedia = [
  {
    icon: <FaGithub />,
    path: "https://github.com/SyahrunFathan",
  },
  {
    icon: <FaLinkedinIn />,
    path: "https://www.linkedin.com/in/syahrun-fathan-hidayah/",
  },
  {
    icon: <FaInstagram />,
    path: "https://www.instagram.com/syahrun_fathan",
  },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socialsMedia.map((item, index) => {
        return (
          <Link
            key={index}
            href={item.path}
            className={iconStyles}
            target="_blank"
          >
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
