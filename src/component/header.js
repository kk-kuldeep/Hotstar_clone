import React from "react";
import "../index.css";
function header() {
  return (
    <div className="navbar">
      <div className="logo">
        <a href="https://www.hotstar.com/in">
          <img className="LogoImage" src="/images/logo.svg" />
        </a>
      </div>

      <div className="Navmenu">
        <a href="#">
          <img className="Home" src="/images/home-icon.svg" />
          <p> HOME</p>
        </a>
        <a href="#">
          <img className="seacrh" src="/images/search-icon.svg" />
          <p> SEARCH</p>
        </a>
        <a href="#">
          <img className="watchlist" src="/images/watchlist-icon.svg" />
          <p> WATCHLIST</p>
        </a>
        <a href="#">
          <img className="originals" src="/images/original-icon.svg" />
          <p> ORIGINALS</p>
        </a>
        <a href="#">
          <img className="movies" src="/images/movie-icon.svg" />
          <p> MOVIES</p>
        </a>
        <a href="#">
          <img className="series" src="/images/series-icon.svg" />
          <p> SERIES</p>
        </a>

        <div className="userimg">
          <a href="#">
            <img src="data:image/jpeg;base64,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" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default header;
