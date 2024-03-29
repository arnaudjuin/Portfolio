import React, { Component } from "react";

class ContactThree extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rnName: "",
      rnEmail: "",
      rnSubject: "",
      rnMessage: "",
    };
  }
  render() {
    return (
      <div className="contact-form--1">
        <div className="container">
          <div className="row row--35 align-items-start">
            <div className="col-lg-12">
              <div className="section-title text-left mb--50">
                <h2 className="title text-center">{this.props.contactTitle}</h2>
                <p className="text-center description">
                  I am available for freelance work. Connect with me via phone:{" "}
                  <a href="tel:+41782512969">+41782512969</a> or email:
                  <a href="mailto:arnaud.juin@gmail.com">
                    {" "}
                    arnaud.juin@gmail.com
                  </a>{" "}
                </p>
              </div>
              <div className="form-wrapper">
                <form>
                  <label htmlFor="item01">
                    <input
                      type="text"
                      name="name"
                      id="item01"
                      value={this.state.rnName}
                      onChange={(e) => {
                        this.setState({ rnName: e.target.value });
                      }}
                      placeholder="Your Name *"
                    />
                  </label>

                  <label htmlFor="item02">
                    <input
                      type="text"
                      name="email"
                      id="item02"
                      value={this.state.rnEmail}
                      onChange={(e) => {
                        this.setState({ rnEmail: e.target.value });
                      }}
                      placeholder="Your email *"
                    />
                  </label>

                  <label htmlFor="item03">
                    <input
                      type="text"
                      name="subject"
                      id="item03"
                      value={this.state.rnSubject}
                      onChange={(e) => {
                        this.setState({ rnSubject: e.target.value });
                      }}
                      placeholder="Write a Subject"
                    />
                  </label>
                  <label htmlFor="item04">
                    <textarea
                      type="text"
                      id="item04"
                      name="message"
                      value={this.state.rnMessage}
                      onChange={(e) => {
                        this.setState({ rnMessage: e.target.value });
                      }}
                      placeholder="Your Message"
                    />
                  </label>
                  <button
                    className="mt--25 rn-button-style--2 btn-solid"
                    type="submit"
                    value="submit"
                    name="submit"
                    id="mc-embedded-subscribe"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default ContactThree;
