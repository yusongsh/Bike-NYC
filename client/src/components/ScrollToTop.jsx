import React, { useState } from "react";
import { faArrowCircleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <>
      <div className="scroll-icon">
        <FontAwesomeIcon
          onClick={scrollToTop}
          icon={faArrowCircleUp}
          size="lg"
          style={{ display: visible ? "inline" : "none" }}
        />
      </div>
    </>
  );
}

export default ScrollToTop;

//learned this from https://www.geeksforgeeks.org/how-to-create-a-scroll-to-top-button-in-react-js/
