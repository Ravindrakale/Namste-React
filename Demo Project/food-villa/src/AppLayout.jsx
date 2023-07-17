import React from "react";
import { Outlet } from "react-router-dom";
import { Header, Footer } from "./components";

function AppLayout() {
  return (
    <div className='app-container'>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default AppLayout;
