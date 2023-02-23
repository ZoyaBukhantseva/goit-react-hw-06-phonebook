import React, { Component } from "react";
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactsList/ContactsList";
import Filter from "./Filter/Filter";
import store from "..//redux/store"
import { Provider } from "react-redux";
class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  inputHandler = ({ target }) => {
    const { value, name } = target;

    this.setState({ [name]: value });
  };

  addToPhonebook = (newContact) => {
    this.state.contacts.find(
      (contact) => contact.name.toLowerCase() === newContact.name.toLowerCase()
    )
      ? alert(`${newContact.name} is already in contacts`)
      : this.setState((prev) => ({
          contacts: [...prev.contacts, newContact],
        }));
  };

  filterContacts = () => {
    const { contacts, filter } = this.state;
    const insensitiveValue = filter.toLowerCase();
    if (filter.length) {
      return contacts.filter((contact) =>
        contact.name.toLowerCase().includes(insensitiveValue)
      );
    } else {
      return contacts;
    }
  };
  deleteContact = (id) => {
    const { contacts } = this.state;
    this.setState({
      contacts: contacts.filter((contact) => contact.id !== id),
    });
  };

  componentDidMount(){       
    const LocalStoragePhonebook = localStorage.getItem('LocalPhonebook');
    const LocalPhonebook = JSON.parse(LocalStoragePhonebook);

    if (LocalPhonebook?.length) {
        this.setState({contacts: LocalPhonebook});
    }; 
}

componentDidUpdate (prevProps, prevState) {
    const prevConatcts = prevState.contacts;
    const currentContacts = this.state.contacts;

    if (currentContacts !== prevConatcts) {
        localStorage.setItem ('LocalPhonebook', JSON.stringify(currentContacts));
    }
}
  render() {
    const { filter } = this.state;
    const filteredContacts = this.filterContacts();
    return (
      <Provider store={store}>
      <div>
        <h1>Phonebook</h1>
        <ContactForm addToPhonebook={this.addToPhonebook} />
        <h2>Contacts</h2>
        <Filter filter={filter} inputHandler={this.inputHandler} />
        <ContactList
          filteredContacts={filteredContacts}
          deleteContact={this.deleteContact}
        />
      </div>
      </Provider>
    );
  }
}


export default App;