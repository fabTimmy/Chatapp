import React from 'react'
import Nav from './Nav'

const Contact = () => {
  return (
    <div>
        <Nav/>
        <section className="contact" id="contact">
      <h2 className="heading">Contact <span>Me!</span></h2>

      <form>
        <div className="inputBox">
          <input type="text" id="name" placeholder="Full Name" required />
          <input type="text" id="email" placeholder="Email Address" required />
        </div>
        <div className="inputBox">
          <input
            type="number"
            id="phone-no"
            placeholder="Mobile Number"
            required
          />
          <input  type="text" id="email-sub" placeholder="Email Subject" />
        </div>
        <textarea
          name=""
          id="message"
          cols={30}
          rows={10}
          placeholder="Your Message"
        ></textarea>
        <input type="submit" value="Send Message" className="btn sub-btn" />
      </form>
    </section>
    </div>
  )
}

export default Contact