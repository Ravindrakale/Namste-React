import { createContext, useState } from "react";

const UserContext = createContext({
  user: {
    name: "dummy user",
    email: "dummy@gmail.com",
    address: "dummy address",
  },
  setUser: () => null,
});

UserContext.displayName = "UserContext";

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: "ravindra",
    email: "ravind999@gmail.com",
    address: "pune",
  });
  return (
    <UserContext.Provider value={{ user: user, setUser: setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
