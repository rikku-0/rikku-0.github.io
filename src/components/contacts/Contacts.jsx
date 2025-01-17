import React from "react";
import "./contacts.css";
import { MdOutlineEmail } from "react-icons/md";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contacts = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_ew7jar2", "template_63t9qhn", form.current, {
      publicKey: "DwVOAOWNjqjQDWpoE",
    });

    form.current.reset();
  };

  return (
    <section id="contacts">
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>rachel.clara.smith@@gmail.com</h5>
            <a href="mailto:rachel.clara.smith@@gmail.com">Send a message</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="user_name"
            placeholder="Your Full Name"
            required
          />{" "}
          {/* client side validation */}
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
          />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contacts;
