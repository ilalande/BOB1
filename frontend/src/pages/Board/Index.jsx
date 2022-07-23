import { useParams } from "react-router-dom";
import PostIt from "@components/PostIt/Index";
import { useDispatch, useSelector } from "react-redux";

import BoardArea from "@components/BoardArea/Index";
import SBoard from "./style";
import plusRose from "../../assets/Fleche_R.svg";

export default function Board() {
  const postItList = useSelector((state) => state.postIts);

  const { boardName } = useParams();
  const dispatch = useDispatch();
  const addPostIt = () => {
    dispatch({
      type: "POSIIT_ADD",
      payload: { color: "pink", status: "draft", board: boardName },
    });
  };
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

        {postItList
          .filter(
            (postIt) => postIt.status === "draft" && postIt.board === boardName
          )
          .map((postIt) => {
            return (
              <PostIt key={postIt.id} id={postIt.id} content={postIt.content} />
            );
          })}
      </div>
      <BoardArea boardName={boardName} />
    </SBoard>
  );
}
