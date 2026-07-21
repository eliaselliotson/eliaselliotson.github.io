import Card from "./components/card/Card.jsx";
import NeonText from "./components/neonText/NeonText.jsx";
import { experience, projects, profiles } from "./constants.jsx";

function App() {
  return (
    <>
      <div className="w-full h-[75vh] max-h-[75vw] flex flex-col items-center justify-center gap-3 md:gap-4 lg:gap-5 text-center px-[10%]" style={{ background: "linear-gradient(#11111100, #111111cc), radial-gradient(#292929, #161616, #000000)" }}>
        <h1 className="text-5xl md:text-7xl lg:text-8xl"><NeonText dark color="#e12afb">Elias</NeonText> <NeonText dark color="#2b7fff">Elliotson</NeonText></h1>
        <p className="font-[Geom] text-base lg:text-xl font-medium text-gray-400 text-center">
          I'm a 17-year-old web developer with over 3 years of professional experience.
        </p>
      </div>

      <div className="w-full flex flex-col gap-15 md:gap-20 my-15 md:my-20 px-[10%]">
        <div className="w-full flex flex-col items-center gap-3 md:gap-5 lg:gap-8">
          <h1 className="font-[Geom] font-black text-2xl md:text-3xl lg:text-4xl text-center">Experience</h1>
          <div className="flex flex-col justify-center gap-2">
            {experience.map((e, i) => <Card key={i} title={e.name} extra={e.time}>{e.description}</Card>)}
          </div>
        </div>

        <div className="w-full flex flex-col items-center gap-3 md:gap-5 lg:gap-8">
          <h1 className="font-[Geom] font-black text-2xl md:text-3xl lg:text-4xl text-center">Projects</h1>
          <div className="flex flex-col justify-center gap-2">
            {projects.map((e, i) => <Card key={i} title={e.name} url={e.url}>{e.description}</Card>)}
          </div>
        </div>

        <div className="w-full flex flex-col items-center gap-3 md:gap-5 lg:gap-8">
          <h1 className="font-[Geom] font-black text-2xl md:text-3xl lg:text-4xl text-center">Socials</h1>
          <div className="flex flex-row justify-center gap-4 md:gap-5 lg:gap-6 w-full flex-wrap">
            {profiles.map((e, i) => <a key={i} className="w-12 md:w-16 lg:w-18" href={e.url}><img src={e.icon} className="w-full" /></a> )}
          </div>
        </div>
      </div>
    </>
  )
}

export default App
