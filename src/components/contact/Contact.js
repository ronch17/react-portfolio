import { useRef, useState } from "react";
import "./contact.css";
import { MdOutlineMail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();
  const [name, setName] = useState("");
  const [inputColor, setInputColor] = useState(false);

  const nameHandler = (e) => {
    setName(e.target.value);
    if (!inputColor && e.target.value.length >= 1) {
      setInputColor(true);
    } else if (e.target.value.length === 0) {
      setInputColor(false);
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_43sk395",
      "template_3e13hbd",
      form.current,
      "XlEBwndrKEGa4LF3j"
    );

    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineMail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>ronch17@live.com</h5>
            <a href="mailto:ronch17@live.com">Send a message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>Whatsapp</h4>
            <h5>054-3437559</h5>
            <a
              href="https://api.whatsapp.com/send?phone=543437559&text=welcome,%20please%20tell%20me%20what's%20on%20your%20mind"
              target="_blank"
            >
              Send a message
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
            onChange={nameHandler}
            style={
              inputColor
                ? { border: "2px solid #4db5ff", transition: "1s ease" }
                : {
                    border: "2px solid rgba(77, 181, 255, 0.4)",
                    transition: "1s ease",
                  }
            }
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            onChange={nameHandler}
            style={
              inputColor
                ? { border: "2px solid #4db5ff", transition: "1s ease" }
                : {
                    border: "2px solid rgba(77, 181, 255, 0.4)",
                    transition: "1s ease",
                  }
            }
          />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
            onChange={nameHandler}
            style={
              inputColor
                ? { border: "2px solid #4db5ff", transition: "1s ease" }
                : {
                    border: "2px solid rgba(77, 181, 255, 0.4)",
                    transition: "1s ease",
                  }
            }
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
