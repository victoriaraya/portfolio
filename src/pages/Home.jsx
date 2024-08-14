const Home = () => {
  return (
    <div className="relative w-full h-screen">
      <video
        className="absolute top-0 left-0 w-full h-screen object-cover"
        autoPlay
        muted
        loop
      >
        <source src="/images/orchids.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
        <h1 className="text-4xl text-center sm:text-5xl font-black px-0.5 sm:px-0 [text-shadow:2px_2px_2px_black]">
          Hello, my name is Victoria Raya
        </h1>
        <h3 className="text-2xl text-center sm:text-3xl mt-3 sm:mt-5 px-2 sm:px-0 [text-shadow:2px_2px_2px_black]">
          I'm the creative, hardworking, positive software engineer of your
          dreams!
        </h3>
        <h2 className="text-3xl sm:text-4xl mt-3 sm:mt-5 [text-shadow:2px_2px_2px_black]">
          ♡
        </h2>
      </div>
      <div className="absolute inset-0 flex justify-center self-end p-1 text-[18px] sm:text-[22px] text-white font-semibold [text-shadow:2px_2px_2px_black]">
        Made by Victoria Raya
      </div>
    </div>
  );
};

export default Home;
