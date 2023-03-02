import React from 'react';
import styles from './ContactListItem.module.css';
import { useDispatch } from 'react-redux';
import { delContact } from '..//..//redux/contactSlise'
import PropTypes from 'prop-types';

const ContactListItem = ({ id, name, number}) => {
  const dispatch = useDispatch();

  const deleteContact = (e) => {
      const contactDelID = e.currentTarget.name;
      dispatch(delContact(contactDelID));
  };
  return (
    <>
      <li className={styles.contactListItem}>
        {name} : {number}
        <button
          className={styles.contactListItemBtn}
          name={ id }
          onClick={ deleteContact }>Delete</button>
      </li>
    </>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactListItem;
