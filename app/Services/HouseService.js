import { ProxyState } from "../AppState.js";
import { House } from "../Models/House.js";




const api = axios.create({
  baseURL: "https://bcw-sandbox.herokuapp.com/api/houses"
}) 

class HouseService {

  addHouse(houseData) {
    var testHouse = new House(houseData)
    ProxyState.houses = [...ProxyState.houses, testHouse]
    console.log('add house in house service')
  }
}

export const houseService = new HouseService()