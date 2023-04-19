import React from "react";
import kids from "../images/kids.png";
import girl from "../images/girl.png";

const Home = () => {
  return (
    <div className="content Home">
      <div className="welcome">
        <h2>Home Page</h2>
        <p>Welcome to our store!</p>
      </div>
      <div className="about">
        <h3>About us</h3>
        <p>
          We sell high quality stationery, school and office supplies to make
          your studying, working or making art comfortable and fun.
        </p>
      </div>
      <div className="home-images">
        <img className="kids" src={kids} alt="kids"></img>
        <img className="girl" src={girl} alt="girl"></img>
      </div>
      <div className="contacts">
        <h3>Contacts</h3>
        <p>Telephone: +307 (24) 53-98-01</p>
      </div>
    </div>
  );
};

export default Home;
