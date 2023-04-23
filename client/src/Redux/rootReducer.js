import { combineReducers } from "redux";
import PortReducer from "./Airports/portReducer";

const rootReducer = combineReducers({
    port: PortReducer,
    
  });
  
  export default rootReducer;