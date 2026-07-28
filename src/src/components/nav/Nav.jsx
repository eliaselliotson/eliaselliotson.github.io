import { useEffect, useState } from "react";
import { useScrollThreshold } from "../../utilities/scrollThreshold.js";
import { projects } from "../../constants.jsx";

export default function Nav({ floating }) {
  let isFloating = floating || useScrollThreshold(48);

  return (
    <div data-theme="dark" className={`font-[Geom] navbar fixed z-100 ${isFloating ? "bg-neutral shadow-lg" : "bg-transparent"} text-neutral-content w-auto left-0 right-0 lg:px-40 lg:mx-0`}>
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-md dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            <li><a href="/">Home</a></li>
            <li>
              <a>Projects</a>
              <ul className="p-2">
                {projects.map((e, i) => <li key={i}><a href={e.url}>{e.name}</a></li>)}
              </ul>
            </li>
            <li><a href="/photos">Photos</a></li>
          </ul>
        </div>
        <a className="text-xl " href="/">Elias Elliotson</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          <li><a className="btn btn-ghost" href="/">Home</a></li>
          <li>
            <div className="dropdown dropdown-bottom dropdown-center p-0">
              <div tabIndex={0} role="button" className="btn btn-ghost m-0">Projects <i class="bi bi-chevron-down"></i></div>
              <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                {projects.map((e, i) => <li key={i}><a href={e.url}>{e.name}</a></li>)}
              </ul>
            </div>
          </li>
          <li><a className="btn btn-ghost" href="/photos">Photos</a></li>
        </ul>
      </div>
      <div className="navbar-end">
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" disabled="disabled" className="btn m-0 btn-ghost"><i class="bi bi-globe2"></i> EN</div>
          <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
            <li><a>English (US)</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}
