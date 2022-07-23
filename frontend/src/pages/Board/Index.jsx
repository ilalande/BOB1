import { useParams } from "react-router-dom";
import PostIt from "@components/PostIt/Index";
import { useDispatch, useSelector } from "react-redux";
import BoardArea from "@components/BoardArea/Index";
import SBoard from "./style";
import plusRose from "../../assets/Fleche_R.svg";
import plusBleuClair from "../../assets/Fleche_BC.svg";
import plusBleuFonce from "../../assets/Fleche_B.svg";

export default function Board() {
  const postItList = useSelector((state) => state.postIts);

  const { boardName } = useParams();
  const dispatch = useDispatch();
  const addPostIt = (color) => {
    dispatch({
      type: "POSIIT_ADD",
      payload: { color, status: "draft", board: boardName },
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
          className="plusRose"
          onClick={() => {
            addPostIt("#FE7D7A");
          }}
        />
        <input
          type="image"
          src={plusBleuClair}
          alt="Créez un nouveau tableau"
          className="plusBleuClair"
          onClick={() => {
            addPostIt("#4FB0C6");
          }}
        />
        <input
          type="image"
          src={plusBleuFonce}
          alt="Créez un nouveau tableau"
          className="plusBleuFonce"
          onClick={() => {
            addPostIt("#5e48d7");
          }}
        />
        {postItList
          .filter(
            (postIt) => postIt.status === "draft" && postIt.board === boardName
          )
          .map((postIt) => {
            return (
              <PostIt
                key={postIt.id}
                id={postIt.id}
                content={postIt.content}
                color={postIt.color}
              />
            );
          })}
      </div>
      <BoardArea boardName={boardName} />
    </SBoard>
  );
}
