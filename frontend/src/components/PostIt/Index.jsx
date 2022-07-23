import { useDrag } from "react-dnd";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import SPostIt from "./style";

export default function PostIt({ id, content }) {
  const dispatch = useDispatch();
  const fillPI = (e) => {
    dispatch({
      type: "POSIIT_ADDCONTENT",
      payload: { id, content: e.target.value },
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
    <SPostIt ref={drag} className={isDragging && "dragging"}>
      <input type="text" id={id} onChange={fillPI} value={content} />
    </SPostIt>
  );
}
PostIt.propTypes = {
  id: PropTypes.number.isRequired,
  content: PropTypes.string,
};

PostIt.defaultProps = {
  content: "",
};
