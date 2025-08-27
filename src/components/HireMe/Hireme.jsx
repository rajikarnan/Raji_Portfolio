import React from "react";

import styles from "./Hireme.module.css";
import { getImageUrl } from "../../utils";

// export const Hireme = () => {
//   return (
//     <footer id="HireMe" className={styles.container}>
//       <div className={styles.text}>
//         <h2>Hire Me</h2>
//         <p>Feel free to reach out!</p>
//       </div>
//       <ul className={styles.links}>
//         <li className={styles.link}>
//           <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
//           <a
//             target="_blank"
//             rel="noopener noreferrer"
//             href="mailto:rajikarnan24@gmail.com"
//           >
//             rajikarnan24@gmail.com
//           </a>
//         </li>
//         <li className={styles.link}>
//           <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
//           <a
//             target="_blank"
//             rel="noopener noreferrer"
//             href="mailto:rajikarnan24@gmail.com"
//           >
//             rajikarnan24@gmail.com
//           </a>
//         </li>
//         <li className={styles.link}>
//           <img
//             src={getImageUrl("contact/linkedinIcon.png")}
//             alt="LinkedIn icon"
//           />
//           <a
//             target="_blank"
//             rel="noopener noreferrer"
//             href="https://www.linkedin.com/in/rajikarnan"
//           >
//             linkedin.com/in/rajikarnan
//           </a>
//         </li>
//         <li className={styles.link}>
//           <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          // <a
          //   target="_blank"
          //   rel="noopener noreferrer"
          //   href="https://www.github.com/rajikarnan"
          // >
          //   github.com/rajikarnan
          // </a>
//         </li>
//       </ul>
//     </footer>
//   );
// };

export const Hireme = () => {

  const [result, setResult] = React.useState("");
  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "6f53d2f3-921c-4193-9a29-ba39bf4ca6c9");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className={styles.container} id="HireMe">
      <h2 className={styles.title}>Get in Touch</h2>
      <div className={styles.contactsection}>
        <div className={styles.contactLeft}>
          <h1>Let's Talk</h1>
          <p>
            I'm currently open to new opportunities and would love to hear from
            you. Whether you have a question, a project idea, or just want to
            connect, feel free to reach out!
          </p>
          <div className={styles.contact_details}>
            <div className={styles.contact_detail}>
              <img
                src={getImageUrl("contact/emailIcon.png")}
                alt="Email icon"
                className="contact-icon"
              />
              <p>rajikarnan24@gmail.com</p>
            </div>
            <div className={styles.contact_detail}>
              <img
                src={getImageUrl("contact/mobileIcon.png")}
                alt="mobile icon"
                className="contact-icon"
              />
              <p>+64 22 5462460</p>
            </div>
            <div className={styles.contact_detail}>
              <img
                src={getImageUrl("contact/locationIcon.png")}
                alt="Location icon"
                className="contact-icon"
              />
              <p>Auckland, New Zealand</p>
            </div>
            <div className={styles.contact_detail}>
              <img
                src={getImageUrl("contact/linkedinIcon.png")}
                alt="LinkedIn icon"
                className="contact-icon"
              />
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/rajikarnan"
              >
                linkedin.com/in/rajikarnan
              </a>
            </div>
            <div className={styles.contact_detail}>
              <img
                src={getImageUrl("contact/githubIcon.png")}
                alt="Github icon"
                className="contact-icon"
              />
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.github.com/rajikarnan"
              >
                github.com/rajikarnan
              </a>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className={styles.contact_right}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            id="name"
            name="name"
            required
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            id="email"
            name="email"
            required
          />
          <label htmlFor="message">Write your message here</label>
          <textarea
            placeholder="Congratulations you are Hired! Just kidding, write your message here :p"
            id="message"
            name="message"
            required
          ></textarea>
          <button type="submit" className={styles.contact_submit}>
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

