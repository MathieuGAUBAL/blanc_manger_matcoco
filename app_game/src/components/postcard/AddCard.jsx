import React, { Component } from "react";
import "./AddCard.css";

class AddCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
    this.onChange = this.onChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  submitForm(e) {
    e.preventDefault();

    const config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.state)
    };

    const url = "http://localhost:5000/api/playercard";

    fetch(url, config).then(res => res.json());
  }

  render() {
    return (
      <form onSubmit={this.submitForm}>
        <fieldset>
          <legend>Send your movie</legend>
          <div className='form-data'>
            <label htmlFor='title'>Text</label>
            <input
              type='text'
              id='text'
              name='text'
              onChange={this.onChange}
              value={this.state.text}
            />
          </div>
          <div className='form-data'>
            <input type='submit' value='Envoyer' />
          </div>
        </fieldset>
      </form>
    );
  }
}

export default AddCard;
