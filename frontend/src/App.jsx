import { Routes, Route } from "react-router-dom";
import Home from "@pages/Home/Index";
import Menu from "@components/Menu/Index";
import Board from "@pages/Board/Index";
import Styled from "./Style";

function App() {
  return (
    <Styled>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:boardName" element={<Board />} />
      </Routes>
      <Menu />
    </Styled>
  );
}

export default App;
