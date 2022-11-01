import { Header } from "./header/Header";
import styles from "./App.module.css";
import { Body } from "./body";
import { Footerr } from "./Footer";
import { useEffect, useState } from "react";
import axios from "axios";

type GITHUBResponse = {
  name: string;
  bio: string;
};

function App() {
  const [Searching, SetSearching] = useState("");
  const [Search, SetSearch] = useState("");
  const [Name, SetName] = useState("");
  const [Bio, SetBio] = useState("");
  const [userName, setUserName] = useState("");
  const [info, SetInfo] = useState({});

  useEffect(() => {
    if (userName) {
      fetch(
        `https://api.github.com/users/${userName}
        `
      )
        .then((response) => response.json())
        .then((response) => {
          SetSearch(response);
        });
    }
  }),
    [userName];

  const [display, setDisplayValue] = useState("");
  const [Texto, MudaTexto] = useState("");

  return (
    <div className="App">
      <Header></Header>
      <div>
        <input
          type="text"
          placeholder="Digite um username"
          onChange={(e) => setUserName(e.target.value)}
        />
        {/* <button onClick={handleSearch}>Buscar</button> */}
      </div>
      <div>
        <ul>
          {}
        </ul>
      </div>

      <Footerr></Footerr>
    </div>
  );
}

export default App;
