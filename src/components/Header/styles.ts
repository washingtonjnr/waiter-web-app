// Packages
import styled from "styled-components";

export const HeaderContainer = styled.header`
  color: #FFF;
  display: flex;
  padding: 20px;
  height: 198px;
  align-items: center;
  justify-content: center;
  background-color: #D73035;
`;

export const HeaderContent = styled.div`
  width: 100%;
  display: flex;
  max-width: 1216px;
  align-items: center;
  justify-content: space-between;

  .page-details {
    h1 {
      font-size: 32px;
      font-weight: 600;
      margin-bottom: 6px;
    }

    h2 {
      opacity: .9;
      font-size: 16px;
      font-weight: 400;
    }
  }
`;
