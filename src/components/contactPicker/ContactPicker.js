import React from "react";

export const ContactPicker = ({
  name,
  onChange,
  contacts
}) => {
  return (
    <select name={name} onChange={onChange}>
      <option defaultValue="DEFAULT" key={-1} >
        Please select a contact.
      </option>
      {contacts.map(((contact) => {
        return (
          <option value={contact} key={contact}>
            {contact}
          </option>
        )
      }))}
    </select>
    
  );
};
