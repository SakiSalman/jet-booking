
import axios from "axios"
import { GET_ALL_USER } from "./authActionTypes";



export const getUSers = () =>  async (dispatch) => {
  await axios.get(`http://localhost:5000/api/v1/user/all`)
  .then( res => {
    dispatch({type : GET_ALL_USER, payload : res.data})
    
  })
  .catch(err => {
    console.log(err);
  })
}
