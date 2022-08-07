import "./App.css";
import "./main.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import List from "./components/List/List";
import Restaurant from "./components/Resturent/Restaurant";
import Header from "./components/shared/Header";
import Footer from "./components/shared/Footer";
import Registration from "./components/User/Registration";
import Login from "./components/User/Login";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/homepage" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/list/:city" element={<List />} />
          <Route path="/restaurant/:id" element={<Restaurant />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
