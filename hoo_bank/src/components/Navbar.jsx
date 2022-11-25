import { useState } from 'react';
import { close, logo, menu } from '../assets';
import { navLinks } from '../constants'

const Navbar = () => {
  const [toggle, setToggle] = useState(false)

  return (
    <nav className="flex justify-between items-center w-full py-6 navbar">
      <a href="#">
        <img className="w-[124px] h-[32px]" src={logo} alt="Hoobank" />
      </a>
      <ul className="hidden justify-end items-center flex-1 list-none sm:flex">
        {navLinks.map((nav, idx) => (
          <li className={`font-normal text-[16px] text-white ${idx === navLinks.length - 1 ? 'mr-0' : 'mr-10'} cursor-pointer`} key={nav.id}>
            <a className="" href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>
      <div className="flex flex-1 justify-end items-center sm:hidden">
        <img className="w-[28px] h-[28px] object-contain cursor-pointer" onClick={() => setToggle((prev) => !prev)} src={toggle ? close : menu} alt="Menu" />

        <div className={`${toggle ? 'flex' : 'hidden'} absolute top-20 right-0 p-6 bg-black-gradient min-w-[140px] rounded-xl mx-4 my-2 sidebar`}>
          <ul className="flex flex-col justify-end items-center flex-1 list-none">
            {navLinks.map((nav, idx) => (
              <li className={`font-normal text-[16px] text-white ${idx === navLinks.length - 1 ? 'mr-0' : 'mb-4'} cursor-pointer`} key={nav.id}>
                <a className="" href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar