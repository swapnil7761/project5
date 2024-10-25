import { useState } from "react";
import "./App.css";
import Navbar from "./component/Navbar";
import Search from "./component/Search";
import Contact from "./component/Contact";

function App() {
  const [list, setList] = useState([
    { name: "swapnil", email: "parsanaswapnil@gmail.com" },
    { name: "nildhara", email: "nildhara.parsana@gmail.com" },
  ]);
  const [filterlist, setFilterlist] = useState(list);

  const filter = (e) => {
    const searchValue = e.target.value.toLowerCase();
    if (searchValue === "") {
      setFilterlist(list);
    } else {
      const filteredData = list.filter((l) =>
        l.name.toLowerCase().includes(searchValue)
      );
      setFilterlist(filteredData);
    }
  };

  const updateList = (newList) => {
    setList(newList);
    setFilterlist(newList);
  };

  return (
    <>
      <Navbar />
      <Search filter={filter} setList={updateList} />
      {filterlist.map((value, index) => (
        <Contact
          key={index}
          index={index}
          value={value}
          list={list}
          setList={updateList}
        />
      ))}
    </>
  );
}

export default App;
