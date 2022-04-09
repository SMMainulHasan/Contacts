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
      <div>
        <input
          type="text"
          name="name"
          value={contact.name}
          onChange={onChange}
        />
        <input
          type="email"
          name="email"
          value={contact.email}
          onChange={onChange}
        />
        <input onClick={addToList} type="submit" value={"Add"} />
      </div>
      {contactList.map((contact) => (
        <Contact key={contact.name} name={contact.name} email={contact.email} />
      ))}
    </div>
  );
};
export default Contacts;
