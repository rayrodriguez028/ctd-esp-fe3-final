import React from "react";

const Message = ({ person }) => {
  return (
    <>
      <h4 className="h4-message"> 💻📧⚡ Gracias, {person.name} 💯, te contactaremos cuanto antes vía email ⚡📧💻</h4>
    </>
  );
};
export default Message;