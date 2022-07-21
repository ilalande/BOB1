import { useDrag } from "react-dnd";

import SPostIt from "./style";

export default function PostIt() {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "postIt",
    item: { name: "Your post it" },

    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
      handlerId: monitor.getHandlerId(),
    }),
  }));
  return (
    <SPostIt ref={drag} className={isDragging && "dragging"}>
      bip
    </SPostIt>
  );
}
