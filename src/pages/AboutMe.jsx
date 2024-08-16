const AboutMe = () => {
  return (
    <div className="h-screen w-full pt-0 sm:pt-16 text-white grid grid-cols-2">
      <p className="p-2 pl-16 pt-16 text-[23px] justify-self-center text-center ">
        Hi, I'm a self-taught developer from California. After years of teaching
        English online while living a nomadic lifestyle, I desired to find a
        career I'd love that would allow me to support myself financially.
        Inspired by an HTML class I remembered loving as a child, I decided to
        explore software development. After over a year of dedicated learning, I
        am thrilled to have found my passion.
        <br />
        <br />I specialize in frontend development with React and Next.js, and
        I'm also skilled in API design and databases. I'm eager to start my
        career somewhere I can grow and contribute positively! In my free time I
        love working out, connecting with nature, dancing, writing and
        traveling.
      </p>
      <div className="absolute top-48 right-36">
        <div className="relative flex items-center justify-center">
          <img
            src="./images/me.png"
            alt="Victoria"
            className="rounded-full w-[350px] h-[350px]"
          />
          <svg
            className="absolute w-[500px] h-[500px] animate-spin-slow"
            viewBox="0 0 300 300"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              id="text-path"
              d="M 150, 150 m -120, 0 a 120,120 0 1,1 240,0 a 120,120 0 1,1 -240,0"
              fill="none"
            />
            <text className="text-[14.1px] fill-current text-white ">
              <textPath href="#text-path" startOffset="50%" textAnchor="middle">
                She has the drive that will inspire others and push us forward
                ・ Her enthusiasm will bring fresh energy to our team ・
              </textPath>
            </text>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
