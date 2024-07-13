import Logotext from "../../assets/images/logotext.png";
import { LiaFacebookMessenger } from "react-icons/lia";
import { RiFacebookBoxLine } from "react-icons/ri";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { CiGlobe } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";

const Footer = () => {
  return (
    <div className="w-full">
      <div className="bg-[#3D60DE]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center md:items-start justify-between p-4 text-white space-y-8 md:space-y-0">
            <div className="space-y-4 md:space-y-8 w-full md:w-[300px] text-center md:text-left">
              <img src={Logotext} alt="logo" className="mx-auto md:mx-0" />
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur.
              </p>
              <div className="flex items-center justify-center md:justify-start gap-4">
                <LiaFacebookMessenger size={24} />
                <RiFacebookBoxLine size={24} />
                <FaWhatsapp size={24} />
                <FaInstagram size={24} />
              </div>
            </div>
            <div className="space-y-4 text-center md:text-left">
              <p className="font-bold">For you</p>
              <p>Courses</p>
              <p>Certifications</p>
              <p>Membership</p>
            </div>
            <div className="space-y-4 text-center md:text-left">
              <p className="font-bold">Help & Information</p>
              <p>About</p>
              <p>Careers</p>
              <p>Press Releases</p>
              <p>Jadi Tutor</p>
            </div>
            <div className="space-y-4 text-center md:text-left">
              <p className="font-bold">Other</p>
              <p>Term of Service</p>
              <p>Privacy</p>
              <p>Cookies</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#FF4363]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between p-4 text-white space-y-4 md:space-y-0">
            <p className="text-center md:text-left">
              © Copyright 2022 Islamic Lecture
            </p>
            <p className="text-center flex items-center md:text-right flex gap-2">
              <CiGlobe /> English <IoIosArrowDown className="cursor-pointer" />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
