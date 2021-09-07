
export class House {
  constructor(houseData) {
    this.id = houseData.id 
    this.price =houseData.price
    this.year = houseData.year
    this.levels = houseData.levels
    this.bedrooms = houseData.bedrooms
    this.bathrooms = houseData.bathrooms
    this.imgUrl = houseData.imgUrl
    this.description =houseData.description
}

get HouseTemplate(){
    return /*html*/`
    <div class="col-lg-3 mb-4 listing">
      <div class="card">
        <img src="${this.imgUrl}" alt="listing image" class="rounded">
        <div class="card-body">
        <h3>  <span> ${this.year} </span></h3>
          <h4 class=" justify-content-between">
            <p><span>  ${this.bedrooms} Rooms</span></p>
            <p><span> ${this.bathrooms} Bathrooms</span></p>
        
            <p><span> Asking price $ ${this.price}</span></p>
            </h4>
            <h5>Description: ${this.description}</h5>
        </div>
      </div>
    </div>
    `
  }
}