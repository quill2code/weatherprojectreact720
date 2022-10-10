import React from "react";

import "./Search.css";

export default function Search() {
  return (
    <form>
      <div className="row">
        <div className="col-xs-12 col-sm-7">
          <input
            type="search"
            placeholder="Search for a City"
            class="search-input"
          />
        </div>
        <div className="col-xs-12 col-sm-5">
          <input type="submit" className="btn" value="Search" />
        </div>
      </div>
    </form>
  );
}
