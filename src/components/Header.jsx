import React, { useEffect, useState } from 'react'
import telegram from '../img/telegram-logo.png'
import menu from '../img/menu.svg'
import { Link, NavLink } from 'react-router'

// modal
import {
  Drawer,
} from "@material-tailwind/react";

import closeIcon from "../img/mob-exit.png"

const Header = () => {

  const [open, setOpen] = React.useState(false);

  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  return (

    <header className="bg-gradient-to-r from-[#FAEDDD] to-[#DBF0FB] py-7 md:pb-14">
      {/* modal */}
      
      <div>

      <Drawer open={open} onClose={closeDrawer} className="p-4 w-56 ">
        <div className="flex justify-end">
       <button className='w-7' onClick={closeDrawer}><img src={closeIcon} alt="closeicon" /></button>   
        </div>

        <div>
          <div className="mb-6 flex items-center justify-between">
            <Link className="text-green-500 font-serif font-bold text-3xl sm:text-2xl" to="/">
              Bola tv
            </Link>
          </div>

          <nav className="flex flex-col space-y-1 mt-5">
            {[
              { to: "/", label: "Bosh sahifa" },
              { to: "/ertaklar", label: "Ertaklar" },
              { to: "/multfilm", label: "Multfilm" },
              { to: "/qo'shiqlar", label: "Qo'shiqlar" },
              { to: "/matematika", label: "Qiziqarli matematika" },
              { to: "/ingliztili", label: "Ingliz tili" },
              { to: "/badantarbiya", label: "Badantarbiya" },
              { to: "/rasm", label: "Rasm" },
              { to: "/murojaat", label: "Murojaat" },
            ].map((item) => (
              <NavLink
                key={item.to}
                onClick={closeDrawer}
                className="text-lg font-medium  block px-2 py-2 rounded transition-all duration-300 underline-offset-2"
                to={item.to}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <Link
            className="inline-flex bg-blue-200 px-5 py-2 rounded-md transition-all duration-40 hover:bg-green-300 underline"
            to="https://t.me/bolatvuz"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="w-5 mr-3" src={telegram} alt="Telegram logo" />
            Obuna bo'lish
          </Link>
        </div>
      </Drawer>
      </div>

      <div className="w-full max-w-7xl mx-auto px-5">

        <div className="flex justify-between items-center md:mb-8">
          <Link className="font-serif font-bold text-2xl sm:text-3xl" to="/">
            Bola tv
          </Link>
          <Link className="hidden md:inline-flex bg-blue-200 px-5 py-2 rounded  transition-all duration-300 hover:bg-green-300" to="https://t.me/bolatvuz" target="_blank"
            rel="noopener noreferrer" >
            <img className="w-5 mr-3" src={telegram} alt="Telegram logo" />
            Obuna bo'lish
          </Link>

          <button
            className="inline-block w-11 active:opacity-60 focus:outline-none md:hidden "
            onClick={openDrawer}
          >
            <img src={menu} alt="menu" />
          </button>
        </div>

        <nav className="hidden md:flex justify-center items-center px-5 py-3 bg-white rounded-lg shadow-md">
          <ul className="flex flex-wrap gap-x-9">
            {[
              { to: "/", label: "Bosh sahifa" },
              { to: "/ertaklar", label: "Ertaklar" },
              { to: "/multfilm", label: "Multfilm" },
              { to: "/qo'shiqlar", label: "Qo'shiqlar" },
              { to: "/matematika", label: "Qiziqarli matematika" },
              { to: "/ingliztili", label: "Ingliz tili" },
              { to: "/badantarbiya", label: "Badantarbiya" },
              { to: "/rasm", label: "Rasm" },
              { to: "/murojaat", label: "Murojaat" },
            ].map((item) => (
              <li key={item.to}>
                <NavLink
                  className="text-xl font-medium transition-all duration-300 hover:text-green-600"
                  to={item.to}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>

  )
}

export default Header