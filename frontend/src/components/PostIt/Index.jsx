import { useDrag } from "react-dnd";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import SPostIt from "./style";

export default function PostIt({ id, content, color }) {
  const dispatch = useDispatch();
  const fillPI = (e) => {
    dispatch({
      type: "POSIIT_ADDCONTENT",
      id,
      payload: { content: e.target.value },
    });
  };
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "postIt",
    item: { id },

    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));
  return (
    <SPostIt ref={drag} className={isDragging && "dragging"} color={color}>
      <input type="text" id={id} onChange={fillPI} value={content} />
    </SPostIt>
  );
}
PostIt.propTypes = {
  id: PropTypes.number.isRequired,
  content: PropTypes.string,
  color: PropTypes.string.isRequired,
};

PostIt.defaultProps = {
  content: "",
};
