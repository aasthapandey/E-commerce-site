import "./App.css";
import { Header } from "./components/Header/index";
import { HeaderConfig } from "./utils/config";

function App() {
  return (
    <>
      <div>
        <Header headerConfig = {HeaderConfig}/>
      </div>
    </>
  );
}

export default App;
