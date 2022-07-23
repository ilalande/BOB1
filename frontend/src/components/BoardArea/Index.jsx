import { useDrop } from "react-dnd";
import { useDispatch } from "react-redux";
import PostIt from "@components/PostIt/Index";
import propTypes from "prop-types";
import SBoardArea from "./style";

export default function BoardArea({ postItList }) {
  const dispatch = useDispatch();
  const addPostItToBoard = (id) => {
    dispatch({
      type: "POSIIT_CHANGESTATUS",
      payload: { id, status: "posted" },
    });
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
};
