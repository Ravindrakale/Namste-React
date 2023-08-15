import React from "react";
import { Outlet } from "react-router-dom";
import { Header, Footer } from "./components";
import { UserProvider } from "./utils/UserContext";
import { Provider } from "react-redux";
import store from "./utils/store";

function AppLayout() {
  return (
    <div className="app-container">
      <Provider store={store}>
        <UserProvider>
          <Header />
          <Outlet />
          <Footer />
        </UserProvider>
      </Provider>
    </div>
  );
}

export default AppLayout;
