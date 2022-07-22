import { useParams } from "react-router-dom";
import PostIt from "@components/PostIt/Index";
import { useState } from "react";
import BoardArea from "@pages/BoardArea/Index";
import SBoard from "./style";
import plusRose from "../../assets/Fleche_R.svg";

export default function Board() {
  const [postItList, setPostItList] = useState([
    {
      id: 1,
      content: "bipbipbip",
      color: "pink",
      status: "draft",
    },
    {
      id: 2,
      content: "bouboupbloup",
      color: "pink",
      status: "draft",
    },
  ]);

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
        {postItList
          .filter((postIt) => postIt.status === "draft")
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
      <BoardArea postItList={postItList} setPostItList={setPostItList} />
    </SBoard>
  );
}
