import React, { Suspense, Component } from "react";
import { Route, NavLink, Switch } from "react-router-dom";
import "./App.scss";
import routes from "../../routes/routes";
interface Props {}
interface State {
  isActiveMenu: boolean;
}

class App extends Component<Props, State> {
  state = {
    isActiveMenu: false,
  };
  handleIsActiveMenu = () => {
    const { isActiveMenu } = this.state;
    this.setState({ isActiveMenu: !isActiveMenu });
  };
  render() {
    const { isActiveMenu } = this.state;
    return (
      <>
        <header className="header">
          <div className="header__wrap">
            <div className="header__logo-wrap">
              <i
                className="fas fa-compass header__logo-icon"
                aria-hidden="true"
              />
              <NavLink className="header__logo-text" to={routes.HomePage.path}>
                iFriends
              </NavLink>
            </div>

            <div className="header__menu-wrap">
              {isActiveMenu ? (
                <>
                  <button
                    className="header__menu-btn"
                    onClick={this.handleIsActiveMenu}
                  >
                    <i
                      className="fa fa-times header__menu-icon"
                      aria-hidden="true"
                    />
                  </button>
                  <nav className="header__menu-dropdown">
                    <form action="#" className="header__menu-form">
                      <input
                        className="header__menu-input"
                        type="text"
                        placeholder="search"
                      />
                    </form>
                    <ul className="header__menu-list">
                      <li className="header__menu-item">
                        <NavLink
                          exact
                          activeClassName="header__link-active"
                          className="header__menu-link"
                          to={routes.HomePage.path}
                        >
                          {routes.HomePage.lable}
                        </NavLink>
                      </li>
                      <li className="header__menu-item">
                        <NavLink
                          activeClassName="header__link-active"
                          className="header__menu-link"
                          to={routes.AboutPage.path}
                        >
                          {routes.AboutPage.lable}
                        </NavLink>
                      </li>
                      <li className="header__menu-item">
                        <NavLink
                          activeClassName="header__link-active"
                          className="header__menu-link"
                          to={routes.LoginPage.path}
                        >
                          {routes.LoginPage.lable}
                        </NavLink>
                      </li>
                      <li className="header__menu-item">
                        <NavLink
                          activeClassName="header__link-active"
                          className="header__menu-link"
                          to={routes.CreatePage.path}
                        >
                          {routes.CreatePage.lable}
                        </NavLink>
                      </li>
                    </ul>
                  </nav>
                </>
              ) : (
                <button
                  className="header__menu-btn"
                  onClick={this.handleIsActiveMenu}
                >
                  <i
                    className="fa fa-bars header__menu-icon"
                    aria-hidden="true"
                  />
                </button>
              )}
            </div>
          </div>
        </header>
        <main>
          <Switch>
            <Route exact path={routes.HomePage.path}>
              <Suspense fallback={<div>Загрузка...</div>}>
                <routes.HomePage.component />
              </Suspense>
            </Route>
            <Route path={routes.AboutPage.path}>
              <Suspense fallback={<div>Загрузка...</div>}>
                <routes.AboutPage.component />
              </Suspense>
            </Route>
            <Route path={routes.LoginPage.path}>
              <Suspense fallback={<div>Загрузка...</div>}>
                <routes.LoginPage.component />
              </Suspense>
            </Route>
            <Route path={routes.CreatePage.path}>
              <Suspense fallback={<div>Загрузка...</div>}>
                <routes.CreatePage.component />
              </Suspense>
            </Route>
          </Switch>
        </main>
      </>
    );
  }
}

export default App;
