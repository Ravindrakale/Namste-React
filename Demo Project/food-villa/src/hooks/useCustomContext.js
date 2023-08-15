import { useContext } from "react";
import CustomContext from "../utils/CustomContext";

const useCustom = ()=> useContext(CustomContext);

export default useCustom;