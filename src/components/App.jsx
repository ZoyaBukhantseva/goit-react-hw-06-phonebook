
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactsList/ContactsList";
import Filter from "./Filter/Filter";
import s from "..//components/ContactForm/ContactForm.module.css"

const App=()=>{

return (<>
    <h1 className={s.header}>Phonebook</h1>
    <ContactForm />
    <h2  className={s.header}>Contacts</h2>
    <Filter />
    <ContactList
    />
  </>
);
};
 

export default App;
/*
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
}*/