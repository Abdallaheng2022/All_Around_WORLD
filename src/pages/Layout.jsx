import { Outlet } from "react-router";
import Header from "../components/Header";

function Layout() {
  return (
    <div className="font-inter dark:text-gray-100">
      <Header />
      <div className="mt-14">
      <Outlet />
      </div>
    </div>
  );
}

export default Layout;
