import { generateId } from "../Utils/generateId.js"
export class House {
  constructor(houseData) {
    this.id = houseData.id || generateId()
    this.price =houseData.price
    this.address = houseData.address
    this.rooms = houseData.rooms
    this.bathrooms = houseData.bathrooms
    this.sqft = houseData.sqft
    this.img = houseData.img
    this.details =houseData.details
}

get HouseTemplate(){
    return /*html*/`
    <div class="col-lg-3 mb-4 listing">
      <div class="card">
        <img src="${this.img}" alt="listing image" class="rounded">
        <div class="card-body">
        <h3>  <span> ${this.address} </span></h3>
          <h4 class=" justify-content-between">
            <p><span>  ${this.rooms} Rooms</span></p>
            <p><span> ${this.bathrooms} Bathrooms</span></p>
            <p><span> ${this.sqft} Sqft </span></p>
            <p><span> Asking price $ ${this.price}</span></p>
            </h4>
            <h5>Description: ${this.details}</h5>
        </div>
      </div>
    </div>
    `
  }
}