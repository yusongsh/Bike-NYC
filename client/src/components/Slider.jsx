import React, { Component } from "react";
import { Slide } from "react-slideshow-image";
import "../style/slider.css";
import "react-slideshow-image/dist/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong, faArrowLeftLong } from "@fortawesome/free-solid-svg-icons"


class Slider extends Component {
  constructor() {
    super();
    this.slideRef = React.createRef();
    this.back = this.back.bind(this);
    this.next = this.next.bind(this);
    this.state = {
      current: 0
    };
  }

  back() {
    this.slideRef.current.goBack();
  }

  next() {
    this.slideRef.current.goNext();
  }

  render() {
    const properties = {
      duration: 5000,
      autoplay: false,
      transitionDuration: 500,
      arrows: false,
      infinite: true,
      easing: "ease",
    //   indicators: (i) => <div className="indicator">{i + 1}</div>
    };
    const slideImages = [
        "https://images.unsplash.com/photo-1512075337258-1365ab103c53?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        "https://images.unsplash.com/photo-1517416759101-67e64aeb3138?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
        "https://images.unsplash.com/photo-1491796064419-c7a3c193a201?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1373&q=80",
        "https://images.unsplash.com/photo-1622734547484-e16f9c78f1bf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
    ];
    return (
      <div className="Slider">
        <div className="slide-container">
          <Slide ref={this.slideRef} {...properties}>
            {slideImages.map((each, index) => (
              <div key={index} className="each-slide">
                <img className="image2" src={each} alt="sample" />
              </div>
            ))}
          </Slide>
          {/* <button onClick={this.back} type="button">
             <FontAwesomeIcon icon={faArrowLeftLong} />
          </button> */}
          <button onClick={this.next} type="button">
            <FontAwesomeIcon icon={faArrowRightLong} />
          </button>
        </div>

        <div className="slide-container buttons">
          
        </div>
      </div>
    );
  }
}

export default Slider;
