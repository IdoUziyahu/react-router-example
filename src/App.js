import logo from "./logo.svg";
import "./App.css";
import ComponentA from "./ComponentA";
import ComponentB from "./ComponentB";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1>My Example App</h1>
      <h3>try to go to paths '/a' and '/b'</h3>
      <BrowserRouter basename="/react-router-example">
        <Routes>
          <Route path="/a" element={<ComponentA />} />
          <Route path="/b" element={<ComponentB />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
