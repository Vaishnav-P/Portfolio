import React from "react";
import "./contact.css";
import { GiPhone } from "react-icons/gi";
import { AiTwotoneMail } from "react-icons/ai";
import { MdLocationPin } from "react-icons/md";
import { useState, useEffect } from "react";
import emailjs from "emailjs-com";
const Contact = () => {
  // const formRef = useRef();
  // const [done, setDone] = useState(false);
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   emailjs
  //     .sendForm(
  //       "service_3w2svzo",
  //       "template_ty7iz7r",
  //       formRef.current,
  //       "user_Ts0POVnnLhbm3Vz2OQyp6"
  //     )
  //     .then(
  //       (result) => {
  //         console.log(result.text);
  //         setDone(true);
  //       },
  //       (error) => {
  //         console.log(error.text);
  //       }
  //     );
  // };
  const intialValues = {
    user_name: "",
    user_subject: "",
    user_email: "",
    message: "",
  };
  const [formValues, setFormValues] = useState(intialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [done, setDone] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      emailjs
        .sendForm(
          "service_3w2svzo",
          "template_ty7iz7r",
          "#contactForm",
          "user_Ts0POVnnLhbm3Vz2OQyp6"
        )
        .then((result) => {
          setDone(true);
        });
    }
  }, [formErrors]);
  useEffect(() => {
    if (done && isSubmit) {
      setFormValues(intialValues);
      //   const timeout = setInterval(() => {
      //     setDone(false);
      //   }, 2000);
      //   return () => setInterval(timeout);
    }
  }, [done, intialValues, isSubmit]);
  const validate = (values) => {
    const errors = {};
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/;
    if (!values.user_name) {
      errors.user_name = "Name is required";
    }
    if (!values.user_subject) {
      errors.user_subject = "Subject is required";
    }
    if (!values.user_email) {
      errors.user_email = "Email is required";
    } else if (!regex.test(values.user_email)) {
      errors.user_email = "Please enter a valid email";
    }
    if (!values.message) {
      errors.message = "Message is required";
    }
    return errors;
  };

  return (
    <div className="c" id="contact">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Get in touch with me</h1>
          <div className="c-info">
            <div className="c-info-item">
              <GiPhone size={50} style={{ fill: "#122932" }} />
              <span>+91 9567416477</span>
            </div>
            <div className="c-info-item">
              <AiTwotoneMail size={40} style={{ fill: "#122932" }} />
              <span>vaishnavp1997@gmail.com</span>
            </div>
            <div className="c-info-item">
              <MdLocationPin size={40} style={{ fill: "darkred" }} />
              <span>Palakkad,Kerala</span>
            </div>
          </div>
        </div>
        <div className="c-right">
          {/* <form className="form-group" ref={formRef} onSubmit={handleSubmit}> */}
          <form className="form-group" onSubmit={handleSubmit} id="contactForm">
            <h2> Contact</h2>
            <div className="inputs">
              <input
                className="input-group"
                type="text"
                placeholder="Name"
                name="user_name"
                value={formValues.user_name}
                onChange={handleChange}
              />
              <p>{formErrors.user_name}</p>
              <input
                className="input-group"
                type="text"
                placeholder="Subject"
                name="user_subject"
                value={formValues.user_subject}
                onChange={handleChange}
              />
              <p>{formErrors.user_subject}</p>
              <input
                className="input-group"
                type="text"
                placeholder="Email"
                name="user_email"
                value={formValues.user_email}
                onChange={handleChange}
              />
              <p>{formErrors.user_email}</p>
              <textarea
                className="input-group"
                rows="5"
                placeholder="Message"
                name="message"
                value={formValues.message}
                onChange={handleChange}
              />
              <p>{formErrors.message}</p>
              <button className="btn btn-primary btn-lg">Submit</button>
              <span>{done && "Thank you..."}</span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
