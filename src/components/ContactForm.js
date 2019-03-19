import React from "react"

class ContactForm extends React.Component{
    render (){
        return (
            <form action="" className="flx contact">
                <div className="mg-0-Auto">
                    <h1>Get in touch</h1>
                    <p>Want to get in touch dummy copy dummy copy dummy copy dummy copy dummy copy dummy copy dummy copy dummy </p>
                </div>
                <fieldset className="flx contactForm">
                    <input type="name" required placeholder="Name" ></input>
                    <input type="email" required placeholder="Email" ></input>
                    <input type="text" required placeholder="Your message" ></input>
                    <button className="sendButton" type="submit" >Send</button>
                </fieldset>
        </form>
        );
    }
}

export default ContactForm;