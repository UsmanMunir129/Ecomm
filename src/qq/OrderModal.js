// Import necessary dependencies
import React, { useState, useRef } from "react";
import axios from "axios";
import emailjs from "@emailjs/browser";
import "react-phone-input-2/lib/style.css";
import NumericInput from "react-numeric-input";
import {
  Modal,
  ModalHeader,
  ModalBody,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import "./ordermodal.css";

// Create the modal component
const OrderModal = ({ isOpen, toggleModal }) => {
  // // State to manage form data
  // const [formData, setFormData] = useState({
  //   firstName: "",
  //   fileName: "",
  //   email: "",
  //   phoneNumber: "",
  //   teamName: "",
  //   wearType: "",
  //   address: "",
  //   product: "",
  // });

  // // Function to handle form input changes
  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({ ...formData, [name]: value });
  // };

  // const emptyModal = () => {
  //   setFormData({
  //     firstName: "",
  //     fileName: "",
  //     email: "",
  //     phoneNumber: "",
  //     teamName: "",
  //     wearType: "",
  //     address: "",
  //     product: "",
  //   });
  // };
  // // Function to handle form submission
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    if (name.length === 0) {
      alert("Name has left Blank!");
    } else if (mobile.length === 0) {
      alert("Mobile has left Blank!");
    } else if (email.length === 0) {
      alert("Email has left Blank!");
    } else {
      const url = "./sub.php";
      let fData = new FormData();
      fData.append("name", name);
      fData.append("mobile", mobile);
      fData.append("email", email);
      axios
        .post(url, fData)
        .then((response) => alert(response.data))
        .catch((error) => alert(error));
    }
  };
  // const form = useRef();

  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   // Append the file to the form data
  //   // const fileInput = form.current.querySelector('input[type="file"]');
  //   // form.current.append("files", fileInput.files[0]);

  //   emailjs
  //     .sendForm(
  //       "service_8ae3bet",
  //       "template_hr4m25d",
  //       form.current,
  //       "wwoVci7BmPiTJjr5f"
  //     )
  //     .then(
  //       (result) => {
  //         console.log(result.text);
  //       },
  //       (error) => {
  //         console.log(error.text);
  //       }
  //     );
  //   toggleModal();
  //   emptyModal();
  // };

  // const uploadProduct= async()=>{
  //     const formData= new FormData();
  //     formData.append('ptitle', ptitle);
  //     formData.append('pprice',pprice);
  //     formData.append('pfile', pfile);
  //     const responce= await axios.post("http://localhost/reactcrudphp/api/product.php", formData, {
  //         headers:{'Content-Type':"multipart/form-data"},
  //     } );

  //     if(responce.data.success)
  //     {
  //         setMessage(responce.data.success);
  //         setTimeout(()=>{
  //             navigate('/productlist');
  //         }, 2000);

  //     }
  // }

  //   const handleSubmit= async(e)=>{
  //     e.preventDefault();
  //     await uploadProduct();

  //  }

  return (
    <>
      <Modal isOpen={isOpen} toggle={toggleModal} style={{ width: "100%" }}>
        <ModalHeader toggle={toggleModal}>Order Form</ModalHeader>
        <ModalBody>
          <form action="./sub.php">
            <div className="form-outline mb-4">
              <label className="form-label" for="name">
                Your Name
              </label>
              <input
                type="text"
                className="form-control form-control-lg"
                name="name"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-outline mb-4">
              <label className="form-label" for="mobile">
                Your Mobile
              </label>
              <input
                type="text"
                className="form-control form-control-lg"
                name="mobile"
                id="mobile"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
              />
            </div>
            <div className="form-outline mb-4">
              <label className="form-label" for="email">
                Your Email
              </label>
              <input
                type="email"
                className="form-control form-control-lg"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-check d-flex justify-content-center mb-5">
              <input
                className="form-check-input me-2"
                type="checkbox"
                value=""
                id="form2Example3cg"
              />
              <label className="form-check-label" for="form2Example3g">
                I agree all statements in{" "}
                <a href="#!" className="text-body">
                  <u>Terms of service</u>
                </a>
              </label>
            </div>
            <div className="d-flex justify-content-center">
              <input
                type="button"
                className="btn btn-success btn-block btn-lg gradient-custom-4 text-body"
                name="submit"
                id="submit"
                value="Register"
                onClick={handleSubmit}
              />
            </div>

            <p className="text-center text-muted mt-5 mb-0">
              Have already an account?{" "}
              <a href="#!" className="fw-bold text-body">
                <u>Login here</u>
              </a>
            </p>
          </form>
        </ModalBody>
      </Modal>
    </>
  );
};

export default OrderModal;
{
  /* <form
            ref={form}
            method="post"
            enctype="multipart/form-data"
            onSubmit={sendEmail}
            className="container-fluid"
          >
            Contact Section
            <div className="contactsection">
              <h4>Contact Information:</h4>
              <div class="mb-3">
                <label>Full Name</label>
                <input
                  type="text"
                  name="user_name"
                  class="form-control"
                  id="fullName"
                  aria-describedby="emailHelp"
                  placeholder="Enter your name"
                ></input>
              </div>

              <div class="mb-3">
                <label>Email address</label>
                <input
                  type="email"
                  name="user_email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="name@example.com"
                ></input>
                <small id="emailHelp" class="form-text text-muted">
                  We'll never share your email with anyone else.
                </small>
              </div>
              <div class="mb-3">
                <label>Phone No:</label>
                <PhoneInput specialLabel={""} country={"th"} name="user_name" />
              </div>
              <div class="mb-3">
                <label>Team or Organization Name (if applicable):</label>
                <input
                  type="email"
                  name="user_email"
                  class="form-control"
                  id="teamName"
                  aria-describedby="emailHelp"
                  placeholder="Team Name"
                ></input>
              </div>
            </div>
            Product Detail Section
            <div className="productsection">
              <h4 className="fw-bold">Product Details:</h4>
              <div className="mb-3">
                <label>
                  Type of Race wear (e.g., suits, gloves, Shoes etc.):
                </label>
                <select class="form-select form-select-lg " name="user_email">
                  <option>Suits</option>
                  <option>Gloves</option>
                  <option>Shoes</option>
                </select>
              </div>
              <div className="mb-3">
                <label>Quantity (number of units needed):</label>
                <input
                  type="number"
                  name="user_name"
                  min="1"
                  max="500"
                  id="typeNumber"
                  class="form-control"
                  placeholder="Enter Quantity"
                />
              </div>
              <div className="mb-3 ">
                <label>Desired Color:</label>
                <input
                  style={{ border: "1px solid black", height: "50%" }}
                  type="color"
                  className="form-control form-control-color "
                  name="user_name"
                ></input>
              </div>
              <div class="mb-3">
                <label>
                  Do you have design mockups or ideas ready? (Yes/No), If Yes,
                  then attach it
                </label>
                <input
                  class="form-control"
                  type="file"
                  id="formFileMultiple"
                  multiple
                />
              </div>
            </div>

            <div class="form-group">
              <label>Example textarea</label>
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
            </div>
            <br />
            <input type="file" name="user_file" />

            <br />
            <input type="submit" value="Send" />
          </form> */
}
