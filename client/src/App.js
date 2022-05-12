import "./App.css";
import { Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact";
import Explore from "./pages/Explore";
import Landing from "./pages/Landing";
import Learn from "./pages/Learn";
import Shop from "./pages/Shop";
import Featured from "./pages/Featured";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/featured" element={<Featured />} />
      </Routes>
    </div>
  );
}

export default App;
