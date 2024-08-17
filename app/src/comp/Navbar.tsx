import React from 'react'

function Navbar() {
    return (
        <nav className="bg-black-500 h:10 w:full flex items:center justify:center" id="main-nav">
            <ul className="gap:1 flex" id="nav-links">
                <li className="text:md :hover-black-400">
                    <a className="list:none dec:none text:color:creamsicle-600" href="#about">About</a>
                </li>
                <li className="text:md :hover-black-400">
                    <a className="list:none dec:none text:color:creamsicle-600" href="#projects">Projects</a>
                </li>
                <li className="text:md :hover-black-400">
                    <a className="list:none dec:none text:color:creamsicle-600" href="#skills">Skills</a>
                </li>
                <li className="text:md :hover-black-400">
                    <a className="list:none dec:none text:color:creamsicle-600" href="#contact">Contact</a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar