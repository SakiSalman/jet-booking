
import axios from "axios"
import { GET_ALL_PORTS } from "./portType";



export const loadAirports =  () =>  async (dispatch) => {
  await axios.get('/airports.json')
  .then( res => {
    dispatch(GET_ALL_PORTS, res.data)
    
  })
  .catch(err => {
    console.log(err);
  })
}
