import { NavLink } from "react-router-dom";
import SMenu from "./style";
import boarbMenu from "../../assets/BoarbMenu.svg";
import infoMenu from "../../assets/infos.svg";

export default function Menu() {
  return (
    <SMenu>
      <ul>
        <li>
          <NavLink to="/">
            <img className="navBarBoarb" src={boarbMenu} alt="logo boarb" />
          </NavLink>
        </li>
        <li className="i">
          <NavLink to="/infos">
            <img className="navBarInfo" src={infoMenu} alt="logo boarb" />
          </NavLink>
        </li>
      </ul>
    </SMenu>
  );
}
