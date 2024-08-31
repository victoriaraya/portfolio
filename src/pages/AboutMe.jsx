const AboutMe = () => {
  return (
    <div className="min-h-screen w-full pt-0 sm:pt-6 text-white grid grid-cols-1 sm:grid-cols-2 sm:gap-2">
      <p className="order-2 sm:order-1 pb-2 p-2 sm:p-20 sm:pl-16 sm:pt-20 text-[23px] justify-self-center text-center sm:-mt-4 sm:-mr-4 [text-shadow:1px_1px_3px_black]">
        I'm a self-taught developer from California. After years of teaching
        English online while living a nomadic lifestyle, I desired to find a
        career I'd love that would allow me to support myself financially.
        Inspired by an HTML class I remembered loving as a child, I decided to
        explore software development. After over a year of dedicated learning, I
        am confident I've found my passion.
        <br />
        <br />I specialize in frontend development with React and Next.js, and
        I'm also skilled in API design and working with databases. I'm eager to
        start my career somewhere I can grow and contribute positively! In my
        free time I love working out, connecting with nature, dancing, writing
        and traveling.
      </p>
      <div className="order-1 pt-14 sm:pt-36 sm:pr-2 pb-14 sm:pb-0 sm:order-2">
        <div className="relative flex items-center justify-center">
          <img
            src="./images/me.png"
            alt="Victoria"
            className="rounded-full w-[250px] h-[250px] sm:w-[350px] sm:h-[350px]"
          />
          <svg
            className="absolute w-[350px] h-[350px] sm:w-[500px] sm:h-[500px] animate-spin-slow"
            viewBox="0 0 300 300"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              id="text-path"
              d="M 150, 150 m -120, 0 a 120,120 0 1,1 240,0 a 120,120 0 1,1 -240,0"
              fill="none"
            />
            <text className="text-[14px] fill-current text-white ">
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
