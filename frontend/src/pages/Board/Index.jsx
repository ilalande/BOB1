import { useParams } from "react-router-dom";
import PostIt from "@components/PostIt/Index";

import BoardArea from "@pages/BoardArea/Index";
import SBoard from "./style";
import plusRose from "../../assets/Fleche_R.svg";

const postItList = [
  {
    id: 1,
    content: "bipbipbip",
    color: "pink",
  },
  {
    id: 2,
    content: "bouboupbloup",
    color: "pink",
  },
];
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
        {postItList.map((postIt) => {
          return (
            <PostIt
              id={postIt.id}
              content={postIt.content}
              color={postIt.color}
            />
          );
        })}
      </div>
      <BoardArea postItList={postItList} />
    </SBoard>
  );
}
