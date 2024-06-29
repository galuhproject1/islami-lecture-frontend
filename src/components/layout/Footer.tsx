import Logotext from "../../assets/images/logotext.png";

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
              <p>social media</p>
            </div>
            <div className="space-y-4 text-center md:text-left">
              <p>For you</p>
            </div>
            <div className="space-y-4 text-center md:text-left">
              <p>Help & Information</p>
            </div>
            <div className="space-y-4 text-center md:text-left">
              <p>Other</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#FF4363]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between p-4 text-white space-y-4 md:space-y-0">
            <p className="text-center md:text-left">© Copyright 2022 Islamic Lecture</p>
            <p className="text-center md:text-right">All Rights Reserved</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;