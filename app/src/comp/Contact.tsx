import React from 'react'

function Contact() {
    return (
        <section className="py:rel:10 w:65 h:80% rel m:auto bg:creamsicle-100" id="contact">
            <h2 className="text:xlg text:center">Let's Talk over a nice Diet Coke</h2>
            <form className="flex col justify:items w:45 m:auto" method="post">
                <label htmlFor="Name">Name</label><input type="text" name="name" id="name-field" title="name" /><br />
                <label htmlFor="Email">Email</label><input type="email" name="email" id="email-field" title="email" /><br />
                <label htmlFor="Subject">Subject</label><input type="text" name="subject" id="subject-field" title="subject" /><br />
                <label htmlFor="Subject">Message</label><br />
                <textarea title="Message" placeholder='Enter your message here' cols={20} rows={10}></textarea>
                <input className="bg:creamsicle-800 btn:flat rounded:sm text:color::white-100 caveat text:md" type="button" value="Send to my DM" />
            </form>
        </section>
    );
}

export default Contact