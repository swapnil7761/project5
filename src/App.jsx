import { useState } from "react";
import "./App.css";
import Navbar from "./component/Navbar";
import Search from "./component/Search";
import Contact from "./component/Contact";

function App() {
  const [list, setList] = useState([
    { name: "swapnil", email: "parsanaswapnil@gmail.com" },
    { name: "nildhara", email: "nildhara.parsana@gmail.com" },
    { name: "amit", email: "amit.raj@gmail.com" },
    { name: "pooja", email: "pooja.singh@yahoo.com" },
    { name: "rahul", email: "rahul.kumar@hotmail.com" },
    { name: "megha", email: "megha.verma@gmail.com" },
    { name: "jatin", email: "jatin.bhatt@outlook.com" },
    { name: "simran", email: "simran.kaur@gmail.com" },
    { name: "neha", email: "neha.sharma@rediffmail.com" },
    { name: "arjun", email: "arjun.patel@gmail.com" },
    { name: "isha", email: "isha.raheja@gmail.com" },
    { name: "yash", email: "yash.gupta@yahoo.com" },
    { name: "anjali", email: "anjali.das@hotmail.com" },
    { name: "vikram", email: "vikram.rai@outlook.com" },
    { name: "deepa", email: "deepa.jain@gmail.com" },
    { name: "sahil", email: "sahil.mehra@gmail.com" },
    { name: "radhika", email: "radhika.kapoor@yahoo.com" },
    { name: "karan", email: "karan.grover@live.com" },
    { name: "tanya", email: "tanya.rana@gmail.com" },
    { name: "raj", email: "raj.malhotra@hotmail.com" },
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
    <div className="appdiv">
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
    </div>
  );
}

export default App;
