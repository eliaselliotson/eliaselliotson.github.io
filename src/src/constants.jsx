import gravatarIcon from "./icons/gravatar.svg";
import githubIcon from "./icons/github.svg";
import gitlabIcon from "./icons/gitlab.svg";
import duolingoIcon from "./icons/duolingo.svg";
import khanacademyIcon from "./icons/khanacademy.svg";
import npmIcon from "./icons/npm.svg";
import xboxIcon from "./icons/xbox.svg";

export const profiles = [
  { name: "Gravatar", icon: gravatarIcon, url: "https://gravatar.com/eliaselliotson" },
  { name: "GitHub", icon: githubIcon, url: "https://github.com/eliaselliotson" },
  { name: "GitLab", icon: gitlabIcon, url: "https://gitlab.com/eliaselliotson" },
  { name: "Duolingo", icon: duolingoIcon, url: "https://duolingo.com/profile/eliaselliotson" },
  { name: "Khan Academy", icon: khanacademyIcon, url: "https://khanacademy.org/profile/eliaselliotson" },
  { name: "NPM", icon: npmIcon, url: "https://npmjs.com/~eliaselliotson" },
  { name: "XBox", icon: xboxIcon, url: "https://xbox.com/en-US/play/user/The%20Null%20Bit" },
];

export const experience = [
  {
    name: "CrackleCat Inc.",
    time: "(2024 - present)",
    description: <>Worked on projects such as the <i>Moo To Do app</i> by <a href="https://cattleytics.com/" target="blank" className="underline text-blue-600">CATTLEytics</a> and websites for financial advisors by <a href="https://adviceon.com/" target="blank" className="underline text-blue-600">AdviceOn</a></>
  }
];

export const projects = [
  {
    name: "Benton Youth Slides",
    url: "https://bentonchurch.github.io/youth-lyrics/",
    description: "A slides app custom built for Benton St. Baptist Church's youth group."
  },
  {
    name: "Daily Bible Readings",
    url: "https://bentonchurch.github.io/bible-readings/",
    description: "A simple bible study platform I developed for a friend of mine."
  },
  {
    name: "Princess Bride Chat",
    url: "https://eliaselliotson.github.io/princessbridechat/",
    description: "A standard messaging platform - except you can only use quotes from the legendary Princess Bride!"
  }
];
