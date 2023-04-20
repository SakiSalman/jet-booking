
import axios from "axios"



export const loadAirports = async () => {
 return await axios.get('https://jsonplaceholder.typicode.com/users')
}