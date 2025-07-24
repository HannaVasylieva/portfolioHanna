import "./App.scss";
import { Home } from "./Pages/Home/Home";
import { Projects } from "./Pages/Projects/Projects";
import { Contacts } from "./Pages/Contacts/Contacts";

function App() {
  return (
    <div className="app">
      <Home />
      <Projects />
      <Contacts />
    </div>
  );
}

export default App;
