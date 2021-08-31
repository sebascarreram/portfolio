import React from "react";
import Aux from "./../../hoc/Aux";
import axios from "axios";
//import Modal from "././../../components/UI/Modal/Modal";

// import Form from "./../../components/Form/Form";
import styleContact from "./Contact.module.css";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      lastname: "",
      email: "",
      message: "",
    };
  }

  onNameChange(e) {
    this.setState({ name: e.target.value });
  }

  onLastNameChange(e) {
    this.setState({ lastname: e.target.value });
  }

  onEmailChange(e) {
    this.setState({ email: e.target.value });
  }

  onMessageChange(e) {
    this.setState({ message: e.target.value });
  }

  resetForm() {
    this.setState({ name: "", lastname: "", email: "", message: "" });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state);
    if (!this.state.name) {
      return "ERROR";
    }
    axios({
      method: 'POST',
      url: 'https://powerful-lake-01064.herokuapp.com/send',
      data: this.state,
    }).then((response) => {
      //  console.log(response)
      if (response.data.status === 'success') {
        //<Modal>Message send.</Modal>;
        alert('Message Sent.');
        this.resetForm();
      } else if (response.data.status === 'fail') {
        alert('Message failed to send.');
      }
    });
  }
  render() {
    return (
      <Aux>
        <section className={styleContact.ContactSection}>
          <div className={styleContact.CardContact}>
            <div>
              <p className={styleContact.message}>
                Thank you for taking the time to reach out.
              </p>
              <p className={styleContact.message}>How can i help you today?</p>
            </div>
            {/* Form */}

            <div className={styleContact.formDiv}>
              <form
                id="contact-form"
                onSubmit={this.handleSubmit.bind(this)}
                method="POST"
              >
                <div className={styleContact.formGroup}>
                  <label htmlFor="name" className={styleContact.label}>
                    Name
                  </label>
                  <input
                    type="text"
                    className={styleContact.formControl}
                    id="name"
                    value={this.state.name}
                    onChange={this.onNameChange.bind(this)}
                  />
                </div>
                <div className={styleContact.formGroup}>
                  <label htmlFor="lastname" className={styleContact.label}>
                    Last name
                  </label>
                  <input
                    type="text"
                    className={styleContact.formControl}
                    id="lastname"
                    value={this.state.lastname}
                    onChange={this.onLastNameChange.bind(this)}
                  />
                </div>
                <div className={styleContact.formGroup}>
                  <label
                    htmlFor="exampleInputEmail1"
                    className={styleContact.label}
                  >
                    Email address
                  </label>
                  <input
                    type="email"
                    className={styleContact.formControl}
                    id="email"
                    aria-describedby="emailHelp"
                    value={this.state.email}
                    onChange={this.onEmailChange.bind(this)}
                  />
                </div>
                <div className={styleContact.formGroup}>
                  <label htmlFor="message" className={styleContact.label}>
                    Message
                  </label>
                  <textarea
                    className={styleContact.formControl}
                    rows="5"
                    id="message"
                    value={this.state.message}
                    onChange={this.onMessageChange.bind(this)}
                  />
                </div>
                <button type="submit" className={styleContact.btnPrimary}>
                  Submit
                </button>
              </form>
            </div>
          </div>
        </section>
      </Aux>
    );
  }
}

export default Contact;

// style={{marginRight: spacing + 'em'}}
