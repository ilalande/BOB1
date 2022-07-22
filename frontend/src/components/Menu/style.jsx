import styled from "styled-components";

export default styled.nav`
  width: 5vw;
  margin-top: auto;
  ul {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 1rem;
  }
  li {
    min-height: 150px;
  }
  li.i {
    min-height: 50px;

    margin-bottom: 1rem;
  }
  .navBarBoarb,
  .navBarInfo {
    width: 7vw;
    max-width: 50px;
    padding-top: 1rem;
  }
  a:hover {
    opacity: 0.2;
    cursor: pointer;
  }
  .active {
    opacity: 0.2;
  }
`;
