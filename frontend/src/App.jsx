import { Routes, Route } from "react-router-dom";
import Home from "@pages/Home/Index";
import Menu from "@components/Menu/Index";
import Board from "@pages/Board/Index";
import Infos from "@pages/Infos/Index";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Styled from "./Style";

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <Styled>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:boardName" element={<Board />} />
          <Route path="/infos" element={<Infos />} />
        </Routes>
        <Menu />
      </Styled>
    </DndProvider>
  );
}

export default App;
