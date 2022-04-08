import React from "react";

interface IProps {
  name: string;
  email?: string;
}

const Contact = ({ name, email = "N/A" }: IProps) => {
  return (
    <div>
      <h3>Name: {name}</h3>
      <h3>Email: {email}</h3>
    </div>
  );
};
export default Contact;
