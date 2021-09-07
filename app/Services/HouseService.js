import { ProxyState } from "../AppState.js";
import { House } from "../Models/House.js";




const api = axios.create({
  baseURL: "https://bcw-sandbox.herokuapp.com/api/houses"
}) 

class HouseService {
  async deleteHouse(houseId){
  await api.delete(houseId)
  ProxyState.houses =ProxyState.house.filter(h=> h.id !== houseId)
}

async addHouse(houseData) {
let res = await api.post ('', houseData)
ProxyState.houses = [...ProxyState.houses, new House(res.data)]
  }

async getHouses(){
  let response =await api.get()
  ProxyState.houses= response.data.map (h => new House(h))
}
}

export const houseService = new HouseService()