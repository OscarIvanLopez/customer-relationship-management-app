import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <h1>Layout</h1>
      <p>antes</p>
      <Outlet />
      <p>despues</p>
    </div>
  );
};

export default Layout;
