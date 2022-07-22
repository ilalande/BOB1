import { useDrag } from "react-dnd";
import { useState } from "react";
import PropTypes from "prop-types";
import SPostIt from "./style";

export default function PostIt({ id, content }) {
  const [piFilled, setPiFilled] = useState(content);
  const fillPI = (e) => {
    setPiFilled(e.target.value);
  };
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "postIt",
    item: { id },

    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));
  return (
    <SPostIt ref={drag} className={isDragging && "dragging"}>
      <input type="text" id={id} value={piFilled} onChange={fillPI} />
    </SPostIt>
  );
}
PostIt.propTypes = {
  id: PropTypes.number.isRequired,
  content: PropTypes.string.isRequired,
};
