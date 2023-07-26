import { combineReducers } from "redux";
import PortReducer from "./Airports/portReducer";
import authReducer from "./auth/authReducer";

const rootReducer = combineReducers({
    port: PortReducer,
    user : authReducer
    
  });
  
  export default rootReducer;