import React, { useState } from "react";
import Contact from "./Contact";

interface IContact {
  name: string;
  email: string;
}

const Contacts = () => {
  const [contact, setContact] = useState<IContact>({} as IContact);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <input type="Name" value={contact.name} name="name" onChange={onChange} />
      <Contact name={contact.name} email={contact.email} />
    </div>
  );
};
export default Contacts;
