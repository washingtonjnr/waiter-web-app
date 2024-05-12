// Components
import { Header } from "./components/Header";
import { Orders } from "./components/Orders";
// Styles
import { GlobalStyles } from "./styles/GlobalStyles";

const App = () => {
  return (
    <>
      {/* Style */}
      <GlobalStyles />

      {/* Content */}
      <Header />

      <Orders />
    </>
  );
};

export default App;
