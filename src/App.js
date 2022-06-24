import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import List from "./components/List/List";
import Resturent from "./components/Resturent/Resturent";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/homepage" element={<HomePage />} />
          <Route path="/list" element={<List />} />
          <Route path="/resturent" element={<Resturent />} />
        </Routes>
        <div className="App">
          <div className="container bg-info">
            <div className="row">
              <div className="col-12">foodis App</div>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
