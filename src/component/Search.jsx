import { useState } from "react";
import Addnew from "./Addnew";
import s from "./Search.module.css";

const Search = ({ filter, setList }) => {
  const [add, setAdd] = useState(false);

  const afteradd = () => {
    setAdd(false);
  };
  return (
    <section className={s.searchsection}>
      <input
        className={s.searchinput}
        onChange={(e) => filter(e)}
        type="text"
        placeholder="Search contacts"
      />
      <button className={s.searchbtn} onClick={() => setAdd(!add)}>
        +
      </button>
      {add ? <Addnew setList={setList} afteradd={afteradd} /> : null}
    </section>
  );
};

export default Search;
