import { createContext } from "react";
const UsersContext = createContext({
    user:{
            name:"dummyName",
            phone:123456,
    }
});

export default UsersContext;