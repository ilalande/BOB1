import SMenu from "./style";
import boarbMenu from "../../assets/BoarbMenu.svg";
import infoMenu from "../../assets/infos.svg";

export default function Menu() {
  return (
    <SMenu>
      <ul>
        <li>
          <img className="navBarBoarb" src={boarbMenu} alt="logo boarb" />
        </li>
        <li>
          <img className="navBarInfo" src={infoMenu} alt="logo boarb" />
        </li>
      </ul>
    </SMenu>
  );
}
