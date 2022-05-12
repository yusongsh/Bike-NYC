import { useState } from "react";
import Nav1 from "../components/Nav1";
import Slideshow from "../components/slideshow";
import Footer1 from "../components/Footer1";
import ScrollToTop from "../components/ScrollToTop";
import Parks from "../components/Parks";
import Paths from "../components/Paths";

function Explore({ parks, paths }) {
  // console.log(parks);

  const [searchpark, setSearchPark] = useState("");
  const [searchpath, setsearchPath] = useState("");

  const handleChangePark = (e) => {
    setSearchPark(e.target.value);
  };

  const handleChangePath = (e) => {
    setsearchPath(e.target.value);
  };

  const filteredParks = parks.filter((park) =>
    park.name.toLowerCase().includes(searchpark.toLowerCase())
  );
  const filteredPaths = paths.filter((path) =>
    path.name.toLowerCase().includes(searchpath.toLowerCase())
  );

  return (
    <>
      <Nav1 />
      <div>
        <h1>Explore</h1>
      </div>

      <div className="park-search">
        <h1 className="park-text">Search a Path</h1>
        <form>
          <input
            type="text"
            className="park-input"
            placeholder="search"
            onChange={handleChangePath}
            style={{
              width: "300px",
              height: "2rem",
              backgroundColor: "#fffffe",
              border: "1px solid #001e1d",
              fontSize: ".875rem",
              marginTop: "0",
              marginLeft: "30px",
              color: "#001e1d",
            }}
          ></input>
        </form>
      </div>
      <div className="park-container">
        {filteredPaths.map((path) => {
          return (
            <Paths
              elevation={path.elevation}
              end_point={path.end_point}
              id={path.id}
              name={path.name}
              length={path.length}
              start_point={path.start_point}
              route_type={path.route_type}
              reviews={path.reviews}
              photo={path.photo_url}
              path_url={path.path_url}
            />
          );
        })}
      </div>

      <div className="park-search">
        <h1 className="park-text">Search a Park</h1>
        <form>
          <input
            type="text"
            className="park-input"
            placeholder="search"
            onChange={handleChangePark}
            style={{
              width: "300px",
              height: "2rem",
              backgroundColor: "#fffffe",
              border: "1px solid #001e1d",
              fontSize: ".875rem",
              marginTop: "0",
              marginLeft: "30px",
              color: "#001e1d",
            }}
          ></input>
        </form>
      </div>
      <div className="park-container">
        {filteredParks.map((park) => {
          return (
            <Parks
              id={park.id}
              name={park.name}
              size={park.park_size}
              image={park.photo_url}
            />
          );
        })}
      </div>

      <ScrollToTop />
      <Footer1 />
    </>
  );
}

export default Explore;
