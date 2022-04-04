import React from "react";

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSubmitted: false,
      email: "",
    };
  }

  handleEmailChange(event) {
    const inputValue = event.target.value;
    this.setState({ email: inputValue });
  }

  handleSubmit() {
    this.setState({ isSubmitted: true });
  }

  render() {
    let contactForm;

    if (this.state.isSubmitted) {
      contactForm = <div className="contact-submit-message">Pesan Terkirim</div>;
    } else {
      contactForm = (
        <form
          action="#"
          onSubmit={() => {
            this.handleSubmit();
          }}
        >
          <p>Alamat Email (wajib diisi)</p>
          <input
            type="email"
            name="email"
            value={this.state.email}
            onChange={(event) => {
              this.handleEmailChange(event);
            }}
          />
          <p>Pesan (wajib diisi)</p>
          <textarea name="pesan" cols="30" rows="10" />
          <input type="submit" value="Kirim" />
        </form>
      );
    }

    return <div className="contact-form">{contactForm}</div>;
  }
}

export default ContactForm;
