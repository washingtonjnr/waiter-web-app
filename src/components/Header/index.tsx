// Assets
import logo from "../../assets/images/logo.svg";
// Styles
import { HeaderContainer, HeaderContent } from "./styles";

export const Header = () => {
  return (
    <HeaderContainer>
      <HeaderContent className="page-details">
        <div>
          <h1>Requests</h1>
          <h2>Customers' request</h2>
        </div>

        <img src={logo} alt="two waiters" />
      </HeaderContent>
    </HeaderContainer>
  );
};
