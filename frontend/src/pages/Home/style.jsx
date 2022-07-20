import styled from "styled-components";

export default styled.div`
  width: 40vw;
  min-width: 250px;
  margin: auto;
  padding-top: 5rem;
  display: flex;
  flex-direction: column;
  img {
    width: 20vw;
    min-width: 200px;
    margin: auto;
  }

  p {
    text-align: center;
    font-size: 3.2rem;
  }
  input {
    color: #fdfffc;
    font-size: 1.8rem;
  }
  .boardNameEnter {
    height: 2rem;
    min-width: 200px;
    margin: 2rem;
    text-decoration: none;
    background: transparent;
    border: none;
    border-bottom: 2px dashed white;
  }
  .plus {
    width: 5vw;
    margin: auto;
    min-width: 100px;
  }
`;
