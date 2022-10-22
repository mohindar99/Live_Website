import { useState } from "react";
import React from "react";

function Contact() {
  const [data, setData] = useState({
    fullname: "",
    phone: "",
    email: "",
    msg: "",
  });

  const formSubmit = (e) => {
    e.preventDefault();
    alert(
      `My name is ${data.fullname} . My phone number is ${data.phone} . My email is ${data.email}. My msg is ${data.msg}`
    );
    setData(() => {
      return {
        fullname:"",
        phone:"",
        email:"",
        msg:"",
      };
    });
  };

  const inputEvent = (event) => {
    const { name, value } = event.target;
    setData((prevalue) => {
      return {
        ...prevalue,
        [name]: value,
      };
    });
  };

  return (
    <>
      <div className="my-5">
        <h1 className="text-center"> Contact page</h1>
      </div>
      <div className="container contract_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmit}>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="fullname"
                  onChange={inputEvent}
                  value={data.fullname}
                  placeholder="Enter your name"
                />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  Phone
                </label>
                <br />
                <input
                  type="number"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="phone"
                  value={data.phone}
                  onChange={inputEvent}
                  placeholder="Enter phone number"
                />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="email"
                  onChange={inputEvent}
                  value={data.email}
                  placeholder="name@example.com"
                />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label">
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  name="msg"
                  value={data.msg}
                  onChange={inputEvent}
                />
              </div>
              <div className="col-auto">
                <button class="btn btn-primary mb-3">Submit Form</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
export default Contact;
