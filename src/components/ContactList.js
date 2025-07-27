import React from "react";

const ContactList = (props) => {
  const renderContacts = props.list.map((contact) => {
    return (
      <div className="item">
        <div className="content">
          <div className="header">{contact.name}</div>
          <div className="header">{contact.email}</div>
        </div>
        <i className="trash alternate outline icon"></i>
      </div>
    );
  });

  return (
    <div className="ui celled list">{renderContacts}</div>
  )
};

export default ContactList;
