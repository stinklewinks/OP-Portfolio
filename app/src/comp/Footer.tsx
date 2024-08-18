import React from 'react'

function Footer() {
    return (
        <footer className="h:40 w:full bg:black:600 flex gap:2 items:center around">
            <div className="flex items:start evenly gap:10 w:80%">
                <div className="">
                    <h3 className="homemade-apple text:lg text:color::white-100">Drew Winkles</h3>
                </div>
                <div>
                     <nav className="flex items:base gap:5 text:color::white-100 poppins">
                <div>
                    <h3>Projects</h3>
                <ul className="flex col items:start">
                    <li>Kiwi Engine</li>
                    <li>TaskPy</li>
                    <li>Grapevine</li>
                    <li>Nectarine</li>
                    <li>Sugar</li>
                </ul>
                </div>
                <div>
                    <h3>Social</h3>
                <ul className="flex col items:start">
                    <li>Instagram</li>
                    <li>YouTube</li>
                    <li>Twitch</li>
                    <li>Discord</li>
                    <li>TikTok</li>
                </ul>
                </div>
                <div>
                    <h3>Useful Resources</h3>
                <ul className="flex col items:start">
                    <li>Roadmap.sh</li>
                    <li>freeCodeCamp</li>
                        <li>
                            <a className="list:none dec:none text:color::white-100 poppins" href="https://www.theodinproject.org">The Odin Project</a>
                        </li>
                        <li>
                            <a className="list:none dec:none text:color::white-100 poppins" href="https://learn.microsoft.com">Microsoft Learn</a>
                        </li>
                </ul>
                </div>
            </nav>   
                </div>
            </div>
            
        </footer>
    );
}

export default Footer