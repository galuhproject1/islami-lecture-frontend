import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

type Props = {
  children: React.ReactNode | JSX.Element;
};

const MainLayout = ({ children }: Props) => {
  const location = useLocation();
  const pathname = location.pathname;

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Check the initial size

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <div>
        {isMobile && pathname.includes("dashboard") ? (
          <div className="flex h-screen justify-center items-center px-4">
          <div className="bg-red-500 text-white p-4 rounded-md text-center">
            Tampilan dashboard hanya bisa dibuka di laptop.
          </div>
          </div>
        ) : (
          <div>
            <Navbar />
            <div className="flex bg-[#F7F7FC]">
              <div
                className={`${
                  pathname.includes("dashboard") ? "block" : "hidden"
                } w-[300px] border-r border-[#E5E5E5] min-h-screen`}
              >
                <Sidebar />
              </div>
              <div
                className={`${
                  pathname.includes("dashboard") ? "p-8  w-full" : "p-0 container mx-auto px-auto"
                }`}
              >
                {children}
              </div>
            </div>
            <div
              className={`${
                pathname.includes("dashboard") ? "hidden" : "block"
              }`}
            >
              <Footer />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MainLayout;
