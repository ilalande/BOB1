import { useDrop } from "react-dnd";

import SBoardArea from "./style";

export default function BoardArea() {
  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: "postIt",

    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }));
  const isActive = canDrop && isOver;

  return (
    <SBoardArea ref={drop} className={isActive && "active"}>
      <p>bip</p>
      <p>bip</p>
    </SBoardArea>
  );
}
