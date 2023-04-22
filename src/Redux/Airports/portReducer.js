import { initialPort } from "./initialPorts";
import { GET_ALL_PORTS } from "./portType";

const PortReducer = (state = initialPort, { type, payload }) => {
    switch (type) {
      case GET_ALL_PORTS:
        
        return {
          ...state,
          ports: payload
        };
      
      default:
        return state;
    }
  };

  export default PortReducer

