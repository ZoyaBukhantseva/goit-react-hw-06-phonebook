import { addContact } from '..//..//redux/contactSlise';
import { useSelector ,useDispatch } from 'react-redux';
import { getContactsState } from 'redux/selectors';
import styles from './ContactForm.module.css';

const ContactForm=()=>{
  const dispatch = useDispatch();
  const contactState = useSelector(getContactsState);
 const handleSubmit = e => {

  e.preventDefault();
  const form = e.currentTarget;
  const name = form.elements.name.value;
  const number = form.elements.number.value;

  const newContact = { name, number };

  const isPresentContact = contactState.find(element => 
      element.name.toLowerCase() === newContact.name.toLowerCase()
  ) ? true: false;
  
  if (isPresentContact){
      alert(`${newContact.name} is already in contacts.`)
  } else {
      dispatch(addContact(newContact));
      form.reset();
  }        
}
  
 return (
      <>
        <form  className={styles.formwrap}  onSubmit={handleSubmit}>
          <label className={styles.contactFormLable}>
            <input
            className={styles.input}
              type="text"
              name="name"
              placeholder="Enter name..."
            ></input>
          </label>
          <label className={styles.contactFormLable}>
            <input
            className={styles.input}
              type="tel"
              name="number"
              placeholder="Enter number..."
            ></input>
          </label>

          <button className={styles.btn} type="submit">Add contact</button>
        </form>
      </>
    );
}


export default ContactForm;