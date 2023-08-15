import { createContext } from "react";

const CustomContext = createContext({
    data:{
        myDate:"sample data"
    }
});

export default CustomContext;