const Contact = () => {
  return (
    <div className="h-screen w-screen mt-0 sm:pt-14 bg-[#b291a4]">
      <div className="flex flex-col sm:flex-row gap-5 h-full w-full">
        <div className="flex flex-col justify-start text-center sm:text-start pt-6 sm:pt-0 px-8 sm:px-0 sm:pl-20 self-center text-white [text-shadow:1px_1px_2px_black] text-3xl w-full sm:w-[400px] sm:animate-slide-right-delay">
          <p className="w-full">
            Feel free to email me at{" "}
            <a href="mailto:victoriaraya111@gmail.com">
              victoriaraya111@gmail.com
            </a>{" "}
            or fill out the contact form here
          </p>
        </div>
        <div className="flex justify-center sm:justify-end sm:pl-40 sm:pt-3 font-gruppo sm:animate-slide-left">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSe63cxuBDykG4HpceyeBNRvYYaBUptjsvzAaRHgXl2eNCZZdw/viewform?embedded=true"
            width="640"
            height="620"
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
