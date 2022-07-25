import { useDrop } from "react-dnd";
import { useDispatch, useSelector } from "react-redux";
import PostIt from "@components/PostIt/Index";
import propTypes from "prop-types";
import SBoardArea from "./style";

export default function BoardArea({ boardName }) {
  const postItList = useSelector((state) => state.postIts);
  const dispatch = useDispatch();
  const addPostItToBoard = (id) => {
    dispatch({
      type: "POSIIT_CHANGESTATUS",
      id,
      payload: { status: "posted" },
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
        .filter(
          (postIt) => postIt.status === "posted" && postIt.board === boardName
        )
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
  boardName: propTypes.string.isRequired,
};
