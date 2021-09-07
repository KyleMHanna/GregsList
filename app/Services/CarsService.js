import { ProxyState } from "../AppState.js"
import { Car } from "../Models/Car.js"

const api = axios.create({
  baseURL: "https://bcw-sandbox.herokuapp.com/api/cars"
})

class CarsService {
  async deleteCar(carId) {
  await api.delete(carId)
  ProxyState.cars= ProxyState.cars.filter(c=c.id !== carId)
}

async addCar(carData) {
  let res = await api.post('', carData)
  ProxyState.cars = [...ProxyState.cars, testCar]
  }

async getCars() {
  let response = await api.get()
  ProxyState.cars = response.data.map(c=> new Car(c))
  }
}

// singleton pattern
export const carsService = new CarsService()