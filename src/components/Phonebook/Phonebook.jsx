import { useState } from 'react';
import { FormStyle, Label, Input, SubmitBtn } from './Phonebook.styled';
import PropTypes from 'prop-types';

const PhonebookForm = ({ addContacts }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleNameChange = ({ target }) => {
    setName(target.value);
  }
  
  const handleNumberChange = ({ target }) => {
    setNumber(target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    addContacts(name, number);
    setName("");
    setNumber("");
  }
    return (
            <FormStyle onSubmit={handleSubmit}>
        <div>
          <Label>Name</Label>
            <Input onChange={handleNameChange}
              type="text"
              value={name}
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required  
            />
          <Label>Number</Label>
            <Input onChange={handleNumberChange}
              type="tel"
              value={number}
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
                    />
            <SubmitBtn type="submit">Add contact</SubmitBtn>
        </div>
            </FormStyle>
        )
}
               
PhonebookForm.propTypes = {
   addContacts: PropTypes.func.isRequired,
}

export default PhonebookForm;