import { Outlet, useNavigate } from "react-router-dom";

const Layout = () => {
  const navigate = useNavigate();

  const handleDashboardClick = () => {
    navigate("/"); // Navigate to the root/dashboard page
  };

  return (
    <div className="app-container">
      {/* Sidebar/Navigation */}
      <div className="navigation-panel">
        <div className="header">
          <h1>Tempo</h1>
        </div>
        <div className="sidebar">
          <button className="button" onClick={handleDashboardClick}>
            Dashboard
          </button>
        </div>
      </div>

      {/* Route content goes here */}
      <div className="main-content">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;

