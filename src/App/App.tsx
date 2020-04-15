import React from "react";

function App() {
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header__logo-wrap">
            <i className="fas fa-compass" aria-hidden="true"></i>
            <span className="header__logo-text">Logo</span>
          </div>
          <div className="header__menu-btn" />
          <div className="header__menu-wrap">
            <form action="#" className="serchForm">
              <input type="text" placeholder="search" />
            </form>
            <nav className="mainMenu">
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Login/Logout</a>
                </li>
                <li>
                  <a href="#">Create</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}

export default App;
