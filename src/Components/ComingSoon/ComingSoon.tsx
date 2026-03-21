import * as React from "react";
import tdfLogo from "../../../src/images/ltdflogo.svg";
import southHell from "../../../src/images/infiernodelsur.svg";
import Sponsors from "../Sponsors/Sponsors";
import CustomCarousel from "../Carousel/Carousel";

const Comingsoon: React.FC = () => {
  return (
    <>
      {/* <div className="main-container">
        <div className="logo-container">
          <iframe
            style={{ width: "1900px", height: "800px", border: "none" }}
            src="https://www.youtube.com/embed/mVe0L4n1C5A?si=q2cKBKmLMLUIDhsE"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </div>
      </div> */}
      <Sponsors />
      <CustomCarousel />
    </>
  );
};

export default Comingsoon;


