import React from "react";

import "./Search.css";

export default function Search() {
  return (
    <form>
      <div class="row">
        <div class="col-xs-12 col-sm-7">
          <input
            type="search"
            placeholder="Search for a City"
            class="search-input"
          />
        </div>
        <div class="col-xs-12 col-sm-5">
          <input type="submit" class="btn" value="Search" />
        </div>
      </div>
    </form>
  );
}
