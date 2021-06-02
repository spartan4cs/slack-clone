import React from "react";
import "./Header";
function Header() {
  return (
    <div className="header">
      <h1>Header</h1>
      <div className="header__left">
        {/**Avatar for logged in user */}
        {/** Time icon*/}
      </div>
      <div className="header__search">
        {/**Search icon */}
        {/**input */}
      </div>
      <div className="header__right">
          {/**help icon */}
      </div>
    </div>
  );
}

export default Header;
