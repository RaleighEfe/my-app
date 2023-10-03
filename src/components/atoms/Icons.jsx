import Link from "next/link";
import { BiLogoTwitter } from "react-icons/bi";
import { BsLinkedin, BsGithub, BsDiscord } from "react-icons/bs";

const Icons = ({ type }) => {
  switch (type) {
    case "LinkedIn":
      return (
        <div>
          <Link
            href="https://www.linkedin.com/in/efe-raleigh-674b8723b/"
            target="_blank"
            rel="noreferrer"
            className="text-gray-400 hover:text-gray-900"
          >
            <BsLinkedin size={20} />
            <span className="sr-only">LinkedIn account</span>
          </Link>
        </div>
      );
    case "Twitter":
      return (
        <div>
          <Link
            href="https://twitter.com/EfeRaleigh"
            target="_blank"
            rel="noreferrer"
            className="text-gray-400 hover:text-gray-900"
          >
            <BiLogoTwitter size={20} />
            <span className="sr-only">Twitter page</span>
          </Link>
        </div>
      );
    case "GitHub":
      return (
        <div>
          <Link
            href="https://github.com/RaleighEfe"
            target="_blank"
            rel="noreferrer"
            className="text-gray-400 hover:text-gray-900"
          >
            <BsGithub size={20} />
            <span className="sr-only">GitHub account</span>
          </Link>
        </div>
      );
    case "Discord":
      return (
        <div>
          <Link
            href=""
            target="_blank"
            rel="noreferrer"
            className="text-gray-400 hover:text-gray-900"
          >
            <BsDiscord size={20} />
            <span className="sr-only">Discord account</span>
          </Link>
        </div>
      );
  }
};

export default Icons;
