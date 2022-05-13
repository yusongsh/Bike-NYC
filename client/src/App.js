import "./App.css";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { API_URL } from "../src/constants";
import Contact from "./pages/Contact";
import Explore from "./pages/Explore";
import Landing from "./pages/Landing";
import Learn from "./pages/Learn";
import Shop from "./pages/Shop";
import Featured from "./pages/Featured";
import Privacy from "./pages/Privacy";
import Credit from "./pages/Credit";
import AddPath from "./pages/AddPath";
import PathDetails from "./pages/PathDetails";

function App() {
  const [parks, setPark] = useState([]);
  // const [loading, setLoading] = useState(false);
  const [paths, setPath] = useState([]);

  useEffect(() => {
    const loadParks = async () => {
      // setLoading(true);
      const res = await axios.get(`${API_URL}/parks`);
      setPark(res.data);
      // setLoading(false);
    };
    const loadPaths = async () => {
      const res = await axios.get(`${API_URL}/paths`);
      setPath(res.data);
    };
    loadParks();
    loadPaths();
  }, []);

  // console.log(paths);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/learn" element={<Learn />} />
        <Route
          path="/explore"
          element={<Explore parks={parks} paths={paths} />}
        />
        <Route path="/contact" element={<Contact />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/featured" element={<Featured />} />
        <Route path="/credit" element={<Credit />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/add" element={<AddPath />} />
        <Route path="/paths/:id/" element={<PathDetails />} />
      </Routes>
    </div>
  );
}

export default App;
