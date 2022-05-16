import React from "react";
import Footer1 from "../components/Footer1";
import Nav1 from "../components/Nav1";

function Privacy() {
  return (
    <>
      <Nav1 />
      <div
        style={{
          width: "100%",
          height: "100vh",
          backgroundColor: "#001e1d",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <p
          style={{
            marginTop: "0",
            paddingTop: "0",
            color: "#ffffff",
            fontSize: "1.25rem",
            fontWeight: "700",
            lineHeight: "2rem",
            maxWidth: "80%",
            textAlign: "center",
            textTransform: "uppercase",
          }}
        >
          CONTACTING US If you have any questions about Bike NYC, our Privacy
          Policy or the Service, please contact us at{" "}
          <a href="mailto:bikenyc222@gmail.com">
            <span
              style={{
                color: "#f9bc60",
                textDecoration: "underline",
                textUnderlineOffset: "3px",
              }}
            >
              bikenyc222@gmail.com.
            </span>
          </a>
        </p>
      </div>
      <Footer1 />
    </>
  );
}

export default Privacy;
