import React, { Fragment } from "react";
import "./card.css";
import image1 from "../../../assets/Los-Angeles.jpg";

export const Card = () => {
  return (
    <Fragment>
      <div className="card text-center">
        <div className="card-body">
          <img className="image" src={image1} alt="" />
          <h4 className="card-title"> My title</h4>
          <p className="card-text text-secondary">
            Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in
            massa egestas mollis varius; dignissim elementum. Mollis tincidunt
            mattis hendrerit dolor eros enim, nisi ligula ornare. Hendrerit
            parturient habitant pharetra rutrum gravida porttitor eros feugiat.
            Mollis elit sodales taciti duis praesent id. Consequat urna vitae
            morbi nunc congue.
          </p>
          <a href="#!" className="btn btn-outline-secondary">
            Go to this website
          </a>
        </div>
      </div>
    </Fragment>
  );
};
