import { useDrag } from "react-dnd";
import PropTypes from "prop-types";
import SPostIt from "./style";

export default function PostIt({ id, content }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "postIt",
    item: { id },

    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));
  return (
    <SPostIt ref={drag} className={isDragging && "dragging"}>
      {content}
    </SPostIt>
  );
}
PostIt.propTypes = {
  id: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};
