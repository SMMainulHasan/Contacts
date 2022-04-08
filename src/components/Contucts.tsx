import React, { useState } from "react";
import Contact from "./Contact";

interface IContact {
  name: string;
  email: string;
}

const Contacts = () => {
  const [contact, setContact] = useState<IContact>({} as IContact);
  const [contactList, setContactList] = useState<IContact[]>([]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };
  const addToList = () => {
    setContactList([...contactList, contact]);
    setContact({ name: "", email: "" });
  };

  return (
    <div>
      <h1>👨Contacts</h1>
      <input type="name" value={contact.name} name="name" onChange={onChange} />
      <input
        type="email"
        value={contact.email}
        name="email"
        onChange={onChange}
      />
      <button onClick={addToList}>Add</button>

      {contactList.map((contact) => (
        <Contact name={contact.name} email={contact.email} />
      ))}
    </div>
  );
};
export default Contacts;
