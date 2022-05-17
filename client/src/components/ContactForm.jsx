import React, { useRef } from "react";
import emailjs from "emailjs-com";
import "../style/contact.css";
import { Link } from "react-router-dom";
import swal from "sweetalert";

function ContactForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    // alert("Uncomment line 17 first");
    emailjs
      .sendForm(
        "service_uzoq2lc",
        "template_apc4yqb",
        form.current,
        "ZHjXYxcVxVwVDSINi"
        //uncommnet line above to enable form
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("messgae sent");
          swal("FORM SUBMITTED", "success");
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
        <input type="text" name="from_name" required />
        <label>
          Email<span>*</span>
        </label>
        <input type="email" name="email" required />
        <label>
          Subject<span>*</span>
        </label>
        <input type="subject" name="subject" required />
        <label>
          Message<span>*</span>
        </label>
        <textarea name="message" required />
        <div className="form-checkbox">
          <input style={{ marginBottom: "0" }} type="checkbox" value="Apple" />{" "}
          <span>
            I agree to Bike NYC’s{" "}
            <Link
              to="/privacy"
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
