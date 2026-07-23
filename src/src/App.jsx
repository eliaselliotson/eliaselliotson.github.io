import Card from "./components/card/Card.jsx";
import Footer from "./components/footer/Footer.jsx";
import NeonText from "./components/neonText/NeonText.jsx";
import ParticleEffect from "./components/particleEffect/ParticleEffect.jsx";
import { experience, projects, profiles } from "./constants.jsx";

function App() {
  return (
    <>
      <div className="relative w-full h-screen flex flex-col items-center justify-center gap-3 md:gap-4 lg:gap-5 text-center px-[10%]" style={{ background: "linear-gradient(#11111100, #111111cc), radial-gradient(#292929, #161616, #000000)" }}>
        <ParticleEffect />
        <h1 className="font-[Geom] text-5xl md:text-7xl lg:text-8xl"><NeonText dark color="#e12afb">Elias</NeonText> <NeonText dark color="#2b7fff">Elliotson</NeonText></h1>
        <p className="font-[Geom] text-base lg:text-xl font-medium text-gray-400 text-center">
          17-year-old web developer with 3+ years of professional experience
        </p>
        <div className="absolute font-[Geom] text-white flex flex-col items-center animate-pulse w-full bottom-1/8">
          <i className="bi bi-arrow-down text-4xl"></i>
          <span className="select-none text-md">Scroll down</span>
        </div>
      </div>

      <div className="w-full flex flex-col gap-15 md:gap-20 my-15 md:my-20 px-[10%]">
        <div className="w-full flex flex-col items-center gap-3 md:gap-5 lg:gap-8">
          <h1 className="font-[Geom] text-2xl md:text-3xl lg:text-4xl text-center"><NeonText color="#8f2afb">About</NeonText></h1>
          <p className="font-[Geom] text-base lg:text-xl font-medium text-gray-800 sm:w-100 md:w-125 lg:w-150 text-justify">
            Hey there! My name is Elias (Eli) Elliotson. I'm a 17-year-old Christian web developer from Canada and the oldest son in a family of six kids.
          </p>
          <p className="font-[Geom] text-base lg:text-xl font-medium text-gray-800 sm:w-100 md:w-125 lg:w-150 text-justify">
            I started coding when I was nine years old. After about five years of hobbyist game development in Processing and ProcessingJS, I was hired into a part-time position as a web developer at CrackleCat Inc. where I built proficiency in Node and React. Since then, I've also used my abilities to support my local church in its various software-development needs.
          </p>
          <p className="font-[Geom] text-base lg:text-xl font-medium text-gray-800 sm:w-100 md:w-125 lg:w-150 text-justify">
            Outside of development, I love studying quantum physics and relativity, and I also spend time composing original music. In all my pursuits, I often find myself drawn to the beauty of complex, structured systems and fueled by a passion for learning.
          </p>
        </div>

        <div className="w-full flex flex-col items-center gap-3 md:gap-5 lg:gap-8">
          <h1 className="font-[Geom] text-2xl md:text-3xl lg:text-4xl text-center"><NeonText color="#8f2afb">Experience</NeonText></h1>
          <div className="flex flex-col justify-center gap-2">
            {experience.map((e, i) => <Card key={i} title={e.name} extra={e.time}>{e.description}</Card>)}
          </div>
        </div>

        <div className="w-full flex flex-col items-center gap-3 md:gap-5 lg:gap-8">
          <h1 className="font-[Geom] text-2xl md:text-3xl lg:text-4xl text-center"><NeonText color="#8f2afb">Projects</NeonText></h1>
          <div className="flex flex-col justify-center gap-2">
            {projects.map((e, i) => <Card key={i} title={e.name} url={e.url}>{e.description}</Card>)}
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default App
