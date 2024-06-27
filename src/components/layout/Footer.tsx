import Logotext from "../../assets/images/logotext.png";

const Footer = () => {
  return (
    <div className="w-full">
      <div className="bg-[#3D60DE]">
        <div className="container mx-auto px-auto mt-24">
          <div className="flex items-center justify-between p-4 text-white">
            <div className="space-y-8 w-[300px]">
              <img src={Logotext} alt="logo" />
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur.{" "}
              </p>
              <p>social media</p>
            </div>
            <div className="space-y-4">
              <p>For you</p>
            </div>
            <div className="space-y-4">
              <p>Help & Informartion</p>
            </div>
            <div className="space-y-4">
              <p>Other</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#FF4363]">
        <div className="container mx-auto px-auto">
          <div className="flex items-center justify-between p-4 text-white">
            <p>© Copyright 2022 Islamic Lecture</p>
            <p>All Rights Reserved</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
