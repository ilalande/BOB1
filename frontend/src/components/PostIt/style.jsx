import styled from "styled-components";

export default styled.div`
  width: 15vw;
  height: 15vh;
  min-width: 70px;
  margin: 1.3rem;
  margin-top: 0;
  padding-top: 2rem;
  display: flex;
  background-color: ${(props) => props.color};
  border-radius: 1.5rem;
  padding: 0.7rem;
  input {
    text-decoration: none;
    background: transparent;
    border: none;
    color: #fdfffc;
    font-family: "Comfortaa", cursive;
    font-size: 1.125rem;
    letter-spacing: -0.5px;
  }
`;
