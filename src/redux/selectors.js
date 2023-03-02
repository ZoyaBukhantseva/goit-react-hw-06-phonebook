export const getContactsState = store => store.contacts;
export const getFileteredContacts = (contacts, filterName) => {
    return contacts.filter(contact =>      
         contact.name.toLowerCase().includes(filterName.toLowerCase()))
}; 

//filter
export const getFiltrState = store => store.filter;