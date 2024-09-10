import { useEffect } from "react";
import { isDark, KeepDarkMode } from "../components/DarkModeButton";
const Contact = () => {
  useEffect(() => {
    if (isDark) {
      KeepDarkMode();
    }
  }, []);
  return (
    // <div className="min-h-screen w-screen mt-0 sm:pt-9 pb-3 md:pb-0 bg-[#b291a4]">
    //   <div className="flex flex-col md:flex-row gap-5 h-full w-full">
    //     <div className="flex flex-col justify-start text-center md:text-start pt-6 sm:pt-0 px-8 sm:px-0 md:pl-12 self-center text-white text-3xl w-full sm:w-[400px] md:animate-slide-right-delay">
    //       <p className="w-full">
    //         Feel free to email me at{" "}
    //         <a href="mailto:victoriaraya111@gmail.com">
    //           victoriaraya111@gmail.com
    //         </a>{" "}
    //         or fill out the contact form here
    //       </p>
    //     </div>
    //     <div className="flex grow sm:pt-3 font-gruppo md:animate-slide-left">
    //       <iframe
    //         src="https://docs.google.com/forms/d/e/1FAIpQLSe63cxuBDykG4HpceyeBNRvYYaBUptjsvzAaRHgXl2eNCZZdw/viewform?embedded=true"
    //         width="100%"
    //         height="620"
    //         frameBorder="0"
    //         marginHeight="0"
    //         marginWidth="0"
    //       >
    //         Loading…
    //       </iframe>
    //     </div>
    //   </div>
    // </div>
    <div className="min-h-screen text-white w-screen mt-0 sm:pt-9 pb-3 sm:pb-0 bg-[#b291a4] overflow-hidden BGtoBlack">
      <div className="grid grid-cols-1 md:grid-cols-[.75fr_1fr] sm:gap-3 h-full w-full">
        <div className="flex flex-col text-center md:text-start pt-6 sm:pt-0 md:pl-10 px-8 md:px-0 self-center text-white text-3xl w-full md:w-[400px] md:animate-slide-right-delay">
          <p className="w-full">
            Feel free to email me at{" "}
            <a href="mailto:victoriaraya111@gmail.com">
              victoriaraya111@gmail.com
            </a>{" "}
            or fill out the contact form here
          </p>
        </div>
        <div className="flex justify-center pt-3 font-gruppo md:animate-slide-left">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSe63cxuBDykG4HpceyeBNRvYYaBUptjsvzAaRHgXl2eNCZZdw/viewform?embedded=true"
            width="100%"
            height="620"
            backgroundColor = "white"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
          >
            Loading…
          </iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
