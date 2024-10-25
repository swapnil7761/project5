import { useState } from "react";
import s from "./Addnew.module.css";

const Addnew = ({ setList, afteradd }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleAdd = () => {
    if (name && email) {
      setList((prevList) => [...prevList, { name, email }]);
      setName("");
      setEmail("");
      afteradd(false);
    }
  };

  return (
    <div className={s.addsection}>
      <p>Name</p>
      <input
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
      <button onClick={handleAdd}>Add Contact</button>
    </div>
  );
};

export default Addnew;
