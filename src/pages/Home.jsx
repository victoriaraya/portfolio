const Home = () => {
  return (
    <div className="relative w-full h-screen">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
      >
        <source src="/images/orchids.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
        <h1 className="text-5xl font-black [text-shadow:2px_2px_2px_black]">
          {"Hello, my name is Victoria Raya :)"}
        </h1>
        <h3 className="text-3xl mt-5 [text-shadow:2px_2px_2px_black]">
          I'm the creative, hardworking and positive software engineer of your
          dreams!
        </h3>
      </div>
    </div>
  );
};

export default Home;
