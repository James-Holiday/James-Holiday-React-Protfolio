import React from "react";
import profilePicture from "../../../static/assets/images/222542_5877127295_2428_n.jpg";

export default function() {
  return (
    <div className="content-page-wrapper">
      <div
        className="left-column"
        style={{
          background: "url(" + profilePicture + ") no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      />
      <div className="right-column">
        Here to obtain a position in an organization that will allow me to use
        my skills and experience to grow into new responsibilities and help the
        business succeed. I am energetic, customer-focused and an extremely
        dependable individual with over 17 years of experience in the sales and
        marketing industry. I have a proven ability to adapt to the demands of a
        diverse and challenging workload while assisting customers. I possess a
        strong work ethic and a desire to go beyond the expectations of my
        employer.
      </div>
    </div>
  );
}
