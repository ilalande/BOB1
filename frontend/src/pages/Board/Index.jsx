import { useParams } from "react-router-dom";
import PostIt from "@components/PostIt/Index";

import BoardArea from "@pages/BoardArea/Index";
import SBoard from "./style";
import plusRose from "../../assets/Fleche_R.svg";

export default function Board() {
  const { boardName } = useParams();

  const addPostIt = () => {};
  return (
    <SBoard>
      <div className="head">
        <h1>{boardName}</h1>
        <input
          type="image"
          src={plusRose}
          alt="Créez un nouveau tableau"
          className="plus"
          onClick={addPostIt}
        />
      </div>
      <div className="PostItZone">
        <PostIt />
        <PostIt />
      </div>
      <BoardArea />
    </SBoard>
  );
}
