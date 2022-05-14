import { useState } from "react";
import { Link } from "react-router-dom";
import Nav1 from "../components/Nav1";
import Footer1 from "../components/Footer1";
import ScrollToTop from "../components/ScrollToTop";
import Parks from "../components/Parks";
import Paths from "../components/Paths";
import "../style/explore.css";
import Map from "../components/Map";
import AddPath from "./AddPath";

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
      <div className="explore-header">
        <img
          src="https://images.squarespace-cdn.com/content/v1/5830e824c534a5539424a2ce/1616086139913-0Y0JNVBEBCBPSQA27WQB/IMG_0221.JPG?format=2500w"
          alt=""
        />
      </div>
      <div className="section-1">
        <div className="section-1-top">
          <h1>Some of The Best Bike Paths in New York City</h1>
          <h3>
            New Yorkers love to spend their time outdoors. And nothing excites
            them more than the start of spring, when they can flock to the
            nearest park to snuggle up with books, dine al fresco and enjoy
            outdoor activities while the warm weather lasts. In an effort to
            fuel an active lifestyle, New York City has some of the most
            picturesque cityscape bike paths. With several options to choose
            from, the urban biker can indulge in multiple rides throughout the
            metropolis.
          </h3>
        </div>

        <div className="section-1-bottom">
          <div className="path-search">
            <h4 className="path-text">Search By Path Name </h4>
            <form>
              <input
                type="text"
                className="path-input"
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
                  textTransform: "none",
                }}
              ></input>
            </form>
          </div>
          <div className="section-1-bottom-right">
            <Link to="/add">
              <button>Add My Fav Bike Path</button>
            </Link>
          </div>
        </div>
      </div>

      <div className="path-container">
        {filteredPaths.map((path) => {
          return (
            <Paths
              key={path.id}
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

      {/* <Map /> */}

      <div className="section-2">
        <div className="section-2-top">
          <h1>Our Favrite Parks in New York City</h1>
          <h3>
            New Yorkers love to spend their time outdoors. And nothing excites
            them more than the start of spring, when they can flock to the
            nearest park to snuggle up with books, dine al fresco and enjoy
            outdoor activities while the warm weather lasts. In an effort to
            fuel an active lifestyle, New York City has some of the most
            picturesque cityscape bike paths. With several options to choose
            from, the urban biker can indulge in multiple rides throughout the
            metropolis.
          </h3>
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
                textTransform: "none",
              }}
            ></input>
          </form>
        </div>
      </div>

      <div className="park-container">
        {filteredParks.map((park) => {
          return (
            <Parks
              key={park.id}
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
