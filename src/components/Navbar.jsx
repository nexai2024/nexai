import React from 'react'
import dayjs from 'dayjs'
import { navLinks, navIcons } from '../constants';

const Navbar = () => {
  return (
    <nav>
        <div className="flex flex-row items-justify justify-between navbar-container">
        <div>
            <img src="/images/logo.svg" alt="Logo" />
            <p className="font-bold">Welcome to the Navbar</p>
            <ul>
                {
                    navLinks.map(({ id, name }) => (
                        <li key={id}>{name}</li>
                    ))
                }
            </ul>
        </div>
        <div>
            <ul>
            {
                navIcons.map(({ id, img }) => (
                    <li key={id}>
                        <img src={img} alt={`Icon-${id}`} className="icon-hover" />
                    </li>
                ))
            }
            </ul>
        <time>{dayjs().format('ddd MMM D h:mm A')}</time>
        </div>
        </div> 
    </nav>
  )
}

export default Navbar