import styled from "styled-components";
import Social from "./Dashboard/Social";

const ContactUs = () => {
  const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;
    text-align: center;

    .container {
      margin-top: 6rem;

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid black;
              color: black;
              transform: scale(0.9);
              font-weight: 600;
            }
          }
        }
      }
    }
  `;

  return (
    <Wrapper>
      <h2 className="common-heading">Feel Free to Contact Us</h2>

      <iframe
        title="loc"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d293.49872343572105!2d73.15450566390032!3d33.66858691778643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfea41a791c7ab%3A0x50dbe70c03eecb4e!2sGreen%20Avenue%20Apartments!5e0!3m2!1sen!2s!4v1698400669027!5m2!1sen!2s"
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>

      <div className="container">
        <div className="contact-form">
          <form
            action="https://formspree.io/f/moqorygv"
            method="POST"
            enctype="multipart/form-data"
            className="contact-inputs"
          >
            <input
              type="text"
              placeholder="username"
              name="username"
              required
              autoComplete="off"
            />

            <input
              type="email"
              name="Email"
              placeholder="Email"
              autoComplete="off"
              required
            />
            <input
              type="file"
              name="attachment"
              accept="image/png, image/jpeg"
            />

            <textarea
              name="Message"
              cols="30"
              rows="10"
              required
              autoComplete="off"
              placeholder="Enter you message"
            ></textarea>

            <input type="submit" value="send" />
          </form>
        </div>
      </div>
      <Social />
    </Wrapper>
  );
};

export default ContactUs;

// import styled from "styled-components";
// import Social from "./Dashboard/Social";

// const ContactUs = () => {
//   const Wrapper = styled.section`
//     padding: 9rem 0 5rem 0;
//     text-align: center;

//     .container {
//       margin-top: 6rem;

//       .contact-form {
//         max-width: 50rem;
//         margin: auto;

//         .contact-inputs {
//           display: flex;
//           flex-direction: column;
//           gap: 3rem;

//           input[type="submit"] {
//             cursor: pointer;
//             transition: all 0.2s;

//             &:hover {
//               background-color: ${({ theme }) => theme.colors.white};
//               border: 1px solid black;
//               color: black;
//               transform: scale(0.9);
//               font-weight: 600;
//             }
//           }
//         }
//       }
//     }
//   `;

//   return (
//     <Wrapper>
//       <h2 className="common-heading">Feel Free to Contact Us</h2>

//       <iframe
//         title="loc"
//         src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d293.49872343572105!2d73.15450566390032!3d33.66858691778643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfea41a791c7ab%3A0x50dbe70c03eecb4e!2sGreen%20Avenue%20Apartments!5e0!3m2!1sen!2s!4v1698400669027!5m2!1sen!2s"
//         width="100%"
//         height="400"
//         style={{ border: 0 }}
//         allowFullScreen=""
//         loading="lazy"
//         referrerPolicy="no-referrer-when-downgrade"
//       ></iframe>

//       <div className="container">
//         <div className="contact-form">
//           <form onsubmit="sendEmail(); reset(); return false;">
//             <input
//               type="text"
//               placeholder="username"
//               name="username"
//               required
//               autoComplete="off"
//             />

//             <input
//               type="email"
//               name="Email"
//               placeholder="Email"
//               autoComplete="off"
//               required
//             />

//             <textarea
//               name="Message"
//               cols="30"
//               rows="10"
//               required
//               autoComplete="off"
//               placeholder="Enter you message"
//             ></textarea>

//             <input type="submit" value="send" />
//           </form>
//         </div>
//       </div>
//       <script src="https://smtpjs.com/v3/smtp.js"></script>
//       <script>
//         function sendEmail()
//         {Email.send({
//           Host: "smtp.gmail.com",
//           Username: "ali.fitracegear@gmail.com",
//           Password: "aLi.fit8003$",
//           To: "ali.fitracegear@gmail.com",
//           From: document.getElementById("email").value,
//           Subject: "New Contact Form",
//           Body:
//             "Name:" +
//             document.getElementById("name").value +
//             "<br> Email: " +
//             document.getElementById("email").value +
//             "<br> Message: " +
//             document.getElementById("message").value,
//         }).then((message) => alert("Message sent success"))}
//       </script>
//       <Social />
//     </Wrapper>
//   );
// };

// export default ContactUs;
