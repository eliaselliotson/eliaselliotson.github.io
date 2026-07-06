import gravatarIcon from "./icons/gravatar.svg";
import githubIcon from "./icons/github.svg";
import gitlabIcon from "./icons/gitlab.svg";
import duolingoIcon from "./icons/duolingo.svg";
import khanacademyIcon from "./icons/khanacademy.svg";
import npmIcon from "./icons/npm.svg";
import xboxIcon from "./icons/xbox.svg";

const profiles = [
  { name: "Gravatar", icon: gravatarIcon, url: "https://gravatar.com/eliaselliotson" },
  { name: "GitHub", icon: githubIcon, url: "https://github.com/eliaselliotson" },
  { name: "GitLab", icon: gitlabIcon, url: "https://gitlab.com/eliaselliotson" },
  { name: "Duolingo", icon: duolingoIcon, url: "https://duolingo.com/profile/eliaselliotson" },
  { name: "Khan Academy", icon: khanacademyIcon, url: "https://khanacademy.org/profile/eliaselliotson" },
  { name: "NPM", icon: npmIcon, url: "https://npmjs.com/~eliaselliotson" },
  { name: "XBox", icon: xboxIcon, url: "https://xbox.com/en-US/play/user/The%20Null%20Bit" },
];

const experience = [
  { name: "CrackleCat Inc.", time: "(2024 - present)", description: <>Worked on projects such as the <i>Moo To Do app</i> by <a href="https://cattleytics.com/" target="blank" className="underline text-blue-600">CATTLEytics</a> and websites for financial advisors by <a href="https://adviceon.com/" target="blank" className="underline text-blue-600">AdviceOn</a></>}
];

const projects = [
  { name: "Benton Youth Slides", url: "https://bentonchurch.github.io/youth-lyrics/", description: "A slides app custom built for Benton St. Baptist Church's youth group." },
  { name: "Daily Bible Readings", url: "https://bentonchurch.github.io/bible-readings/", description: "A simple bible study platform I developed for a friend of mine." },
  { name: "Princess Bride Chat", url: "https://eliaselliotson.github.io/princessbridechat/", description: "A standard messaging platform - except you can only use quotes from the legendary Princess Bride!" }
];

function Card({ title, extra, children, url }) {
  return <div className="border border-gray-300 rounded-lg px-6 py-4 sm:w-100 md:w-125 lg:w-150">
    <a href={url} target="blank">
      <span className={`font-bold ${url && "hover:underline"}`}>{title} {url && <i class="bi bi-box-arrow-up-right text-xs align-middle"></i>}</span> {extra && <span className="text-gray-400 font-thin">{extra}</span>}
      <p>{children}</p>
    </a>
  </div>;
}

function App() {
  return (
    <>
      <div className="w-full flex flex-col gap-20 my-15 md:my-20 lg:my-30 px-[10%]">
        <div className="w-full flex flex-col items-center gap-3 md:gap-4 lg:gap-5 text-center my-10 md:my-20 lg:my-40 2xl:my-60">
          <h1 className="font-[Geom] font-black text-5xl md:text-7xl lg:text-8xl text-blue-600">Elias Elliotson</h1>
          <p className="font-[Geom] text-base lg:text-xl font-medium text-gray-700 text-center">I'm a 17-year-old web developer with over 3 years of professional experience.</p>
        </div>

        <div className="w-full flex flex-col items-center gap-3 md:gap-5 lg:gap-8">
          <h1 className="font-[Geom] font-black text-2xl md:text-3xl lg:text-4xl text-center">Experience</h1>
          <div className="flex flex-col justify-center gap-2">
            {experience.map(e => <Card title={e.name} extra={e.time}>{e.description}</Card>)}
          </div>
        </div>

        <div className="w-full flex flex-col items-center gap-3 md:gap-5 lg:gap-8">
          <h1 className="font-[Geom] font-black text-2xl md:text-3xl lg:text-4xl text-center">Projects</h1>
          <div className="flex flex-col justify-center gap-2">
            {projects.map(e => <Card title={e.name} url={e.url}>{e.description}</Card>)}
          </div>
        </div>

        <div className="w-full flex flex-col items-center gap-3 md:gap-5 lg:gap-8">
          <h1 className="font-[Geom] font-black text-2xl md:text-3xl lg:text-4xl text-center">Socials</h1>
          <div className="flex flex-row justify-center gap-4 md:gap-5 lg:gap-6 w-full flex-wrap">
            {profiles.map(e => <a className="w-12 md:w-16 lg:w-18" href={e.url}><img src={e.icon} className="w-full" /></a> )}
          </div>
        </div>
      </div>
    </>
  )
}

export default App
