import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import AddName from "./components/AddName";
import Header from "./components/Header";
import EditName from "./components/EditName";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddName />} />
        <Route path="/update/:id" element={<EditName />} />
      </Routes>
    </div>
  );
}

export default App;
