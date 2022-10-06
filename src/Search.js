import React from "react";

export default function Search() {
  return (
    <form>
      <div class="row">
        <div class="col-xs-12 col-md-8">
          <input
            type="search"
            placeholder="Search for a City"
            class="search-input"
          />
        </div>
        <div class="col-xs-12 col-md-4">
          <input type="submit" class="btn" value="Search" />
        </div>
      </div>
    </form>
  );
}
