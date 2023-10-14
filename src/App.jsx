import "./App.css";
import { Header } from "./components/Header/index";
import { HeaderConfig } from "./utils/config";
import { Register } from "./pages/Register";
import { Practice } from "./pages/pratice";

function App() {
  return (
    <>
      <div>
        <Header headerConfig={HeaderConfig} />
        <Register />
        {/* <Practice /> */}
      </div>
    </>
  );
}

export default App;
