const Contact = () => {
  return (
    <div className="h-screen w-full relative">
      {/* <video
        className="absolute top-0 left-0 w-[50%] h-full object-cover"
        autoPlay
        muted
        loop
      >
        <source src="/images/flowers.mp4" type="video/mp4" />
      </video> */}
      <img
        src="./images/orchid_pic_slice.png"
        alt="orchids"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      <div className="flex h-full w-full">
        <div className="absolute flex flex-col justify-start pl-20 self-center text-3xl w-96 z-20">
          <p className="w-full">
            Feel free to email me at{" "}
            <a href="mailto:victoriaraya111@gmail.com">
              victoriaraya111@gmail.com
            </a>{" "}
            or fill out the contact form here
          </p>
          <p>☺︎</p>
        </div>
        <div className="absolute inset-0 flex justify-end pr-20 pt-4 font-gruppo">
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
