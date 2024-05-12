// Packages
import styled from "styled-components";

export const ContainerBoard = styled.div`
  flex: 1;
  gap: 16px;
  display: flex;
  padding: 16px;
  border-radius: 16px;
  flex-direction: column;
  justify-content: flex-start;
  background-color: rgba(204, 204, 204, 0.1);
  border: 1px solid rgba(204, 204, 204, 0.4);

  header {
    gap: 8px;
    width: 100%;
    padding: 8px;
    display: flex;
    font-style: 14px;
    align-items: center;
  }
`;

export const Requests = styled.div`
  gap: 16px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  button {
    height: 128px;
    display: flex;
    border-radius: 8px;
    align-items: center;
    flex-direction: column;
    background-color: #FFF;
    justify-content: center;
    border: 1px solid rgba(204, 204, 204, 0.4);
  }
`;
