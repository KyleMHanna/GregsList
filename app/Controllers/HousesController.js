import { ProxyState } from "../AppState.js"
import { getHouseFormTemplate  } from "../forms/houseform.js"
import { houseService } from "../Services/HouseService.js"
function _drawHouses() {
  let template = ''
  ProxyState.houses.forEach(house => template += house.HouseTemplate)
    document.getElementById('listings').innerHTML = template

}

export class HousesController {
  constructor() {
    ProxyState.on('houses', _drawHouses)
  }

 async addHouse() {
    event.preventDefault()
  /**
     * @type {HTMLFormElement}
     */
    // @ts-ignore
    const form = event.target
    
    const houseData = {
      price: form.price.value,
      address: form.address.value,
      rooms: form.rooms.value,
      bathrooms: form.bathrooms.value,
      sqft: form.sqft.value,
      img: form.img.value,
      details: form.details.value
    }

    try {
     await houseService.addHouse(houseData)
    } catch (e) {
      form.make.classList.add('border-danger')
      console.error('[TODO] you were supposed to do this', e)
      return
    }

    form.reset()
  }


  showHouses() {
    _drawHouses()
    document.getElementById('controls').innerHTML = `
      <button class="btn btn-success" onclick="app.housesController.toggleHouseForm()">Add House</button>
    `
    document.getElementById('forms').innerHTML = getHouseFormTemplate()
 
  }

  toggleHouseForm() {
  
    document.getElementById('house-form').classList.toggle('visually-hidden')
  }

}