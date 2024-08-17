import React from 'react'

function About() {
    return (
        <section className="m:auto w:65 flex col items:center p:rel:5 h:90 bg:gray:100" id="About-me">
            <div className="mt:25">
                <h2 className="text:xxlg text:center">
                Hello, my name is Drew
            </h2>
            <h3 className="homemade-apple text:md mt:3 kern:.5">but you can call me <span className="text:color:orange-600 homemade-apple">StinkleWinks</span></h3>
            </div>
        </section>
    );
}

export default About