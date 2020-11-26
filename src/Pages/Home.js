import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import AppsIcon from "@material-ui/icons/Apps";
import { Avatar } from "@material-ui/core";
import Search from "./Search";

function Home() {
  return (
    <div classsName="home">
      <div className="home__header">
        <div className="home__headerLeft">
          <Link path="/about">About</Link>
          <Link path="/store">Store</Link>
        </div>
        <div className="home__headerRight">
          <Link path="/image">Image</Link>
          <Link path="/Search">Search</Link>
          <AppsIcon />
          <Avatar />
        </div>
      </div>
      <div className="home__body">
        <img
          src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
          alt=""
        />
        <div className="home__input">
        <Search />
        
        </div>
      </div>
    </div>
  );
}
export default Home;
