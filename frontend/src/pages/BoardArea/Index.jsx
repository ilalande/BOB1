import { useDrop } from "react-dnd";
import React, { useState } from "react";
import PostIt from "@components/PostIt/Index";
import PropTypes from "prop-types";
import SBoardArea from "./style";

export default function BoardArea({ postItList }) {
  // creating the list of post its displayed in the zone
  const [board, setBoard] = useState([]);
  const addPostItToBoard = (id) => {
    const postItAdded = postItList.filter((postIt) => id === postIt.id);
    setBoard(postItAdded[0]);
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
      {board.map((postIt) => {
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
  postItList: PropTypes.InstanceOf(Array).isRequired,
};
