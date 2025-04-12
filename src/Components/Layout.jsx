import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="app-container">
      {/* Navigation panel stays the same */}
      <div className="navigation-panel">
        <div className="header">
          <h1>Tempo</h1>
        </div>
      </div>

      {/* Content will be injected here */}
      <div className="main-content">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
