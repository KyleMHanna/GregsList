

export class Car {
  constructor(carData) {
    this.id = carData.id 
    this.make = carData.make
    this.model = carData.model
    this.year = carData.year
    this.description = carData.description
    this.price = carData.price
    this.imgUrl = carData.imgUrl
  }

  get CardTemplate(){
    return /*html*/`
    <div class="col-lg-3 mb-4 listing">
      <div class="card">
        <img src="${this.imgUrl}" alt="listing image" class="rounded">
        <div class="card-body">
          <h5 class="d-flex justify-content-between">
            <span >${this.make} - ${this.model}</span>
            <span>$ ${this.price}</span>
          </h5>
          <p>${this.description}</p>
          <button class="btn btn-danger" onclick="app.carsController.deleteCar('${this.id}')">Delete</button>
        </div>
      </div>
    </div>
    `
  }


}