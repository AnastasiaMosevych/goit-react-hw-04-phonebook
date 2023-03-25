import { useState, useEffect } from "react";

const useLocalStorage = (key, defaultValue) => {
  const [contacts, setContacts] = useState(() => {
    const parsedContacts = JSON.parse(localStorage.getItem(key)) ?? defaultValue;
    return parsedContacts;
  })

    useEffect(() => {
        window.localStorage.setItem(key, JSON.stringify(contacts));
    }, [contacts, key]); 
    return [contacts, setContacts];
};

export default useLocalStorage;