import { useRef, useEffect, useState } from "react";
import s from "./Addnew.module.css";

const Addnew = ({ value, setList, afteradd, edit, setEdit }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const nameref = useRef();

  useEffect(() => {
    if (value && edit) {
      setName(value.name);
      setEmail(value.email);
    }
    nameref.current.focus();
  }, [value, edit]);

  const handleUpdate = () => {
    if (edit) {
      setList((prevList) =>
        prevList.map((contact) =>
          contact.email === value.email ? { name, email } : contact
        )
      );
      setEdit(false);
    }
  };

  const handleAdd = () => {
    if (name && email) {
      setList((prevList) => [...prevList, { name, email }]);
      setName("");
      setEmail("");
      afteradd(false);
    }
  };

  return (
    <>
      <div className={s.backdrop}>
        <div className={s.addsection}>
          <div className={s.closebtn}>
            <button
              onClick={() => {
                if (afteradd) afteradd(false);
                if (edit) setEdit(false);
              }}
            >
              X
            </button>
          </div>
          <p>Name</p>
          <input
            ref={nameref}
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter name"
          />
          <p>Email</p>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
          />
          <button onClick={edit ? handleUpdate : handleAdd}>
            {edit ? "Update" : "Add"} Contact
          </button>
        </div>
      </div>
    </>
  );
};

export default Addnew;
