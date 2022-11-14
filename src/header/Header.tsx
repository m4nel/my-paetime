import styles from "./header.module.css";
import LogoMenor from "../assets/LogotypeMenor.svg";
import Lupa from "../assets/Magnifier.svg";
import axios from "axios";
import React, { useState} from "react";

interface Props {
  handleChange: (e: any) => void
  handleSearch: () => void
  value: string 
}

export const Header: React.FC<Props> = ({handleChange, handleSearch, value}) => {

  return (
    <div className={styles.main}>
      <div className={styles.LogoMenors}>
        <img src={LogoMenor} alt="Logo" width={78} height={36} />
      </div>
      <div className="">
        <input
          className={styles.inputHeader}
          type="text"
          name=""
          id=""
          placeholder="Pesquisar"
          value={value}
          onChange={handleChange}
        />
      </div>
      <div>
        <button type="submit" className={styles.BotaoSubmit} onClick={() => handleSearch()}>
          {<img src={Lupa} alt="Logo" width={20} height={20} />}
        </button>
      </div>
    </div>
  );
};
