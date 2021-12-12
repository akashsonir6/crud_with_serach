import "./App.css";
import Nav from "./component/Nav";
import Adduser from "./component/pages/Adduser";
import Home from "./component/pages/Home";
import { Routes, Route } from "react-router-dom";
import Edituser from "./component/pages/Edituser";
import Search from "./component/pages/Search";
function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/adduser" element={<Adduser />} />
        <Route path="/search" element={<Search />} />
        <Route path="/edituser/:id" element={<Edituser />} />
      </Routes>
    </div>
  );
}

export default App;
