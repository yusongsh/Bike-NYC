import React, { useRef } from "react";
import emailjs from "emailjs-com";
import "../style/contact.css";
import { Link } from "react-router-dom";

function ContactForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    alert("Uncomment line 17 first");
    emailjs
      .sendForm(
        "service_irba3vc",
        "template_zo6pefi",
        form.current
        // "IZsZeTaGJi9ZVtHox"
        //uncommnet line above to enable form
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("messgae sent");
          alert("FORM SUBMITTED");
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <div className="ContactForm">
      <form className="contact" ref={form} onSubmit={sendEmail}>
        <label>
          Name<span>*</span>
        </label>
        <input type="text" name="from_name" />
        <label>
          Email<span>*</span>
        </label>
        <input type="email" name="email" />
        <label>
          Subject<span>*</span>
        </label>
        <input type="subject" name="subject" />
        <label>
          Message<span>*</span>
        </label>
        <textarea name="message" />
        <div className="form-checkbox">
          <input style={{ marginBottom: "0" }} type="checkbox" value="Apple" />{" "}
          <span>
            I agree to Bike NYC’s{" "}
            <Link
              to=""
              style={{
                textDecoration: "underline",
                textUnderlineOffset: "0.3rem",
              }}
            >
              privacy policy
            </Link>
          </span>
          <span style={{ color: "#e16162" }}>*</span>
        </div>
        <input type="submit" value="Send!" />
      </form>
    </div>
  );
}

export default ContactForm;
