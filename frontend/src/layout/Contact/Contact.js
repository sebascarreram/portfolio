import React from "react";
import Aux from "./../../hoc/Aux";
import axios from "axios";

// import Form from "./../../components/Form/Form";
import style from "./Contact.module.css";

class Contact extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      subject: "",
      message: ""
    };
  }

  onNameChange(event) {
    this.setState({ name: event.target.value });
  }

  onEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  onSubjectChange(event) {
    this.setState({ subject: event.target.value });
  }

  onPurchaseCancelHandler() {
    this.setState({ purchasing: false });
  }

  onMessageChange(event) {
    this.setState({ message: event.target.value });
  }

  resetForm() {
    this.setState({ name: "", email: "", subject: "", message: "" });
  }

  handleSubmit(event) {
    event.preventDefault();

    axios({
      method: "POST",
      url: "http://localhost:3002/send",
      data: this.state
    }).then(response => {
      if (response.data.status === "success") {
        alert(
          "\t\tThank you for contacting us.\t\t\t\n\tWe will reply to you as soon as possible.\t"
        );
        this.resetForm();
      } else if (response.data.status === "fail") {
        alert("Message failed to send / Mensaje no enviado");
      }
    });
  }

  render() {
    return (
      <Aux>
        <section className={style.ContactSection}>
          <div className={style.CardContact}>
            {/* <h1>Contact me</h1> */}
            <p>Thank you for taking the time to reach out.</p>
            <p>How can i help you today?</p>
            {/* Form */}
            {/* <Form
              isContact
              id="contact-form"
              onSubmit={this.handleSubmit.bind(this)}
              // onChangeName={`${this.state.name}`}
              onChangeName={this.onNameChange.bind(this)}
              onChangeEmail={this.onEmailChange.bind(this)}
              onChangeSubject={this.onSubjectChange.bind(this)}
              onChangeMessage={this.onMessageChange.bind(this)}
              valueNam={this.state.name}
              valueEmail={this.state.email}
              valueSubject={this.state.subject}
              valueMessage={this.state.message}
            /> */}
            <div className={style.CardMessage}>
              <p>E-mail: sebascarreram@hotmail.com</p>
              <p>Please write your name with SCM in subject like: </p>
							<p>"yourName - SCM"</p>
              <p>
                <b>Thank you</b>
              </p>
            </div>
          </div>
        </section>
      </Aux>
    );
  }
}

export default Contact;

// style={{marginRight: spacing + 'em'}}
