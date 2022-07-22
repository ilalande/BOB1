import { useDrop } from "react-dnd";
import PostIt from "@components/PostIt/Index";
import propTypes from "prop-types";
import SBoardArea from "./style";

export default function BoardArea({ postItList, setPostItList }) {
  // creating the list of post its displayed in the zone

  const addPostItToBoard = (id) => {
    const postItAdded = postItList.filter((postIt) => id === postIt.id);
    postItAdded[0].status = "posted";
    setPostItList(
      postItList.filter((postIt) => postIt.id !== id).concat(postItAdded[0])
    );
  };
  // creating Drop zone
  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: "postIt",

    drop: (item) => addPostItToBoard(item.id),

    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }));
  const isActive = canDrop && isOver;

  return (
    <SBoardArea ref={drop} className={isActive && "active"}>
      {postItList
        .filter((postIt) => postIt.status === "posted")
        .map((postIt) => {
          return (
            <PostIt
              key={postIt.id}
              id={postIt.id}
              content={postIt.content}
              boardName={postIt.boardName}
              color={postIt.color}
            />
          );
        })}
    </SBoardArea>
  );
}
BoardArea.propTypes = {
  postItList: propTypes.arrayOf(propTypes.shape()).isRequired,
  setPostItList: propTypes.func.isRequired,
};
