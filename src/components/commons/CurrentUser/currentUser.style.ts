import styled from "styled-components";

const CurrentUserContainerStyle = styled.div`
  border: solid 1px red;
  border-radius: 5px;
  position: fixed;
  bottom: 1rem;
  left: 1rem;
  display: flex;
  justify-content: center;
  padding: 0.5rem;
  z-index: 10000;
  background-color: rgba(255, 255, 255, 0.8);
  color: black;
  font-size: 0.9rem;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  p {
    margin: 0;
    font-weight: bold;
  }
`;

const CurrrentUserImageStyle = styled.img`
  height: 30px;
`;

export { CurrentUserContainerStyle, CurrrentUserImageStyle };
