import { Routes, Route } from "react-router-dom";
import Home from "@pages/Home/Index";
import Styled from "./Style";

function App() {
  return (
    <Styled>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Styled>
  );
}

export default App;
