import React from 'react'

function Footer() {
    return (
        <footer className="h:40 w:full bg:black:600 flex gap:2 items:center around">
            <div className="ml:rel:10">
                <h3 className="homemade-apple text:lg text:color::white-100">Drew Winkles</h3>
            </div>
            <nav className="flex items:center gap:5">
                <div>
                    <h3>Other Links</h3>
                <ul className="flex col items:center">
                    <li>Link item</li>
                    <li>Link item</li>
                    <li>Link item</li>
                    <li>Link item</li>
                    <li>Link item</li>
                </ul>
                </div>
                <div>
                    <h3>Other Links</h3>
                <ul className="flex col items:center">
                    <li>Link item</li>
                    <li>Link item</li>
                    <li>Link item</li>
                    <li>Link item</li>
                    <li>Link item</li>
                </ul>
                </div>
                <div>
                    <h3>Other Links</h3>
                <ul className="flex col items:center">
                    <li>Link item</li>
                    <li>Link item</li>
                    <li>Link item</li>
                    <li>Link item</li>
                    <li>Link item</li>
                </ul>
                </div>
            </nav>
        </footer>
    );
}

export default Footer