import { useContext } from "react";
import UserContext from "../utils/UserContext";

const useUser = () => useContext(UserContext);
export default useUser;
