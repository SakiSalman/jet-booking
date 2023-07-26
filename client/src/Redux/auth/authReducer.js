import { GET_ALL_USER } from "./authActionTypes";
import { authInitial } from "./initiaState";

const authReducer = (state = authInitial, { type, payload }) => {
    switch (type) {
      case GET_ALL_USER:
       
        return {
          ...state,
          users:payload
        };
      
      default:
        return state;
    }
  };

  export default authReducer

