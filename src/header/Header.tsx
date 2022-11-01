import styles from "./header.module.css";
import LogoMenor from "../assets/LogotypeMenor.svg";
import Lupa from "../assets/Magnifier.svg";
import axios from "axios";
import { useState } from "react";



export const Header = () => {

// const [Search, SetSearch] = useState("")
// const [Name, SetName] = useState("")
// const [Bio, SetBio] = useState("")

// const HandleSearch = () => {
//   axios
//   .get(`https://api.github.com/search/users/${Search}`)
// .then((res) => {
//   SetName(res.data.name);
//   SetBio(res.data.bio);
// })
//  }


  return (
    <div className={styles.main}>
      <div className={styles.LogoMenors}>
        <img src={LogoMenor} alt="Logo" width={78} height={36} />
      </div>
      <div className="">
        <input className={styles.inputHeader} type="text" name="" id="" placeholder="Pesquisar"/>
      </div>
      <div>
        <button type="submit" className={styles.BotaoSubmit}  >
          {<img src={Lupa} alt="Logo" width={20} height={20} />}
        </button>
      </div>
    </div>
  );
};
