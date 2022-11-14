import { Header } from "./header/Header";
import styles from "./App.module.css";
import { Body } from "./body";
import { Footerr } from "./Footer";
import { useEffect, useState } from "react";
import axios from "axios";
import Api, {User} from "./api";


function App() {
  const [Search, SetSearch] = useState("");
  const [display, setDisplayValue] = useState("false");
  const [text, setText] = useState("");
  const [result, setResult] = useState("");
  const [userName, setUserName] = useState("");
  const [usersFound, setUsersFound] = useState<User[]>([]);

  const handleChange = (e: any) => {
    setText(e.target.value);
  };

  const updateResult = (r: any) => {
    setResult(r);
  };

  const handleSearch = () => {
     Api.filterUsers(text).then(res => setUsersFound(res.data.items))
  }
console.log(usersFound, text)
  return (
    <div className="App">
      <Header handleSearch={() => handleSearch()} handleChange={handleChange} value={text} />

      <>
        <p>{!display && result}</p>
      </>

      <Footerr></Footerr>
    </div>
  );
}

export default App;
