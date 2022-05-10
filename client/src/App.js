import "./App.css";
import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Album from "./pages/Learn";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/learn" element={<Album />} />
      </Routes>
    </div>
  );
}

export default App;
