import useLocalStorage from './Hooks/useLocalStorage';
import { Title } from "components/Common/Title";
import ContactList from "components/ContactList/ContactList";
import PhonebookForm from "./Phonebook/Phonebook";
import { Filter } from "./Filter/Filter";
import { Container } from "./ContactList/ContactList.styled";
import nextId from "react-id-generator";
import { useState } from 'react';

const App = () => {
  const [contacts, setContacts] = useLocalStorage('contacts', []);
  const [filter, setFilter] = useState('');

  const addContacts = (name, number) => {
    let contactIsNew = true;
    contacts.forEach((contact) => {
      if (name.toLowerCase() === contact.name.toLowerCase()) {
        contactIsNew = false;
      }  
    })
    if (contactIsNew === false) {
      return alert(`${name} is already in contacts`)
    } else {
      setContacts((prevContacts) => [...prevContacts, { name, number, id: nextId() }])
    }      
  }

  const deleteContact = (e) => {
    e.preventDefault();
    let idToRemove = e.target.value;
    let filteredContacts = contacts.filter((contact) => contact.id !== idToRemove);
    setContacts(filteredContacts)
   }
  
  const filterContacts = (contacts, filter) => {
    let filteredContacts = [];
    contacts.forEach((contact) => { 
      if (filter === "" || contact.name.toLowerCase().includes(filter.toLowerCase())) {
          filteredContacts.push(contact);
        } 
    })
    return filteredContacts;
  }

  const updateFilter = ({ target }) => {
    setFilter(target.value);
  }
  return (
      <Container>
        <Title title="Phonebook" />
        <PhonebookForm addContacts={addContacts} />
        <Title title="Contacts" />
        <Filter updateFilter={updateFilter} filter={filter} />
        <ContactList
          contacts={filterContacts(contacts, filter)}
          deleteContact={deleteContact} />
      </Container>
  );
}

export default App

