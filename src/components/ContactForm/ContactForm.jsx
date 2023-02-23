import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styles from './ContactForm.module.css';
import PropTypes from 'prop-types';

class ContactForm extends Component {
  initialState = {
    name: '',
    number: '',
  };
  state = {
    name: '',
    number: '',
  };
  handleSubmit = e => {
    e.preventDefault();
    const singleContact = {
      name: this.state.name,
      number: this.state.number,
      id: uuidv4(),
    };
    this.props.addToPhonebook(singleContact);
    this.setState({ ...this.initialState });
  };

  inputHandler = ({ target }) => {
    const { value, name } = target;

    this.setState({ [name]: value });
  };

  render() {
    const { name, number } = this.state;
    return (
      <>
        <form  className={styles.formwrap}  onSubmit={this.handleSubmit}>
          <label className={styles.contactFormLable}>
            <input
            className={styles.input}
              onChange={this.inputHandler}
              type="text"
              name="name"
              placeholder="Enter name..."
              value={name}
            ></input>
          </label>
          <label className={styles.contactFormLable}>
            <input
            className={styles.input}
              onChange={this.inputHandler}
              type="tel"
              name="number"
              placeholder="Enter number..."
              value={number}
            ></input>
          </label>

          <button className={styles.btn} type="submit">Add contact</button>
        </form>
      </>
    );
  }
}

ContactForm.propTypes = {
  addToPhonebook: PropTypes.func.isRequired,
};

export default ContactForm;