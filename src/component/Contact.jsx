import React, { useState } from "react";
import Addnew from "./Addnew";
import s from "./Contact.module.css";

const Contact = ({ value, setList, list, index }) => {
  //   const [edit, setEdit] = useState(false);
  const deletebtn = () => {
    setList(list.filter((_, i) => i !== index));
  };
  //   let data;
  //   const editbtn = () => {
  //     setEdit(!edit);
  //     data = list.filter((_, i) => i == index);
  //     console.log(data);
  //   };

  return (
    <div className={s.contactcard}>
      <div className={s.cardimg}>
        <img src="./user.png" alt="user photo" />
      </div>
      <div className={s.cardtext}>
        <h3>{value.name}</h3>
        <p>{value.email}</p>
      </div>
      <div className={s.cardbtn}>
        <button>edit</button>
        <button onClick={deletebtn}>delete</button>
      </div>
      {/* {edit && <Addnew data={data} />} */}
    </div>
  );
};

export default Contact;
