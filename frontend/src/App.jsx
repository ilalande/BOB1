import { Routes, Route } from "react-router-dom";
import Home from "@pages/Home/Index";
import Menu from "@components/Menu/Index";
import Board from "@pages/Board/Index";
import Infos from "@pages/Infos/Index";
import Styled from "./Style";

function App() {
  return (
    <Styled>
      <div className="main">
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:boardName" element={<Board />} />
          <Route path="/infos" element={<Infos />} />
        </Routes>
      </div>
    </Styled>
  );
}

export default App;
