import { useNavigate } from "react-router-dom";
import { useState } from "react";
import SHome from "./style";
import boarbLogoSvg from "../../assets/logo.svg";
import plusBleu from "../../assets/Fleche_JB.svg";

export default function Home() {
  const [boardNameEntered, setboardNameEntered] = useState([""]);
  const navigate = useNavigate();
  const createBoard = (e) => {
    setboardNameEntered(e.target.value);
  };
  const goBoard = () => {
    navigate(`/${boardNameEntered}`);
  };
  return (
    <SHome>
      <img className="navBarLogo" src={boarbLogoSvg} alt="logo boarb" />
      <p>Créez votre tableau</p>
      <input
        type="text"
        id="boardName"
        className="boardNameEnter"
        onBlur={createBoard}
      />
      <input
        type="image"
        src={plusBleu}
        alt="Créez un nouveau tableau"
        className="plus"
        onClick={goBoard}
      />
    </SHome>
  );
}
