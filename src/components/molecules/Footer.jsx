import Link from "next/link";
import Icons from "../atoms/Icons";

const Footer = () => {
  return (
    <div>
      <footer>
        <div className="px-4 py-6 bg-gray-100 md:flex md:items-center md:justify-between">
          <span className="text-sm text-gray-500 sm:text-center">
            © 2023 <Link href="/">MyPortfolio™</Link>. All Rights Reserved.
          </span>
          <div className="flex mt-4 space-x-5 sm:justify-center md:mt-0">
            <Icons type="LinkedIn" />
            <Icons type="GitHub" />
            <Icons type="Twitter" />
            <Icons type="Discord" />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
