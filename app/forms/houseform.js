export function getHouseFormTemplate() {
  return /*html*/`
  <form class="bg-white rounded p-3 shadow visually-hidden" onsubmit="app.housesController.addHouse()"
  id="house-form">
  <div class="form-group">
    <label for="price" class="">Price:</label>
    <input name="price" id="price"  class="form-control">
  </div>

  <div class="form-group">
    <label for="address" class="">address:</label>
    <input type="text" class="form-control" name="address" id="address" >
  </div>

  <div class="form-group">
    <label for="sqft" class="">sqft:</label>
    <input type="text" class="form-control" name="sqft" id="sqft">
  </div>

  <div class="form-group">
    <label for="rooms" class="">Rooms:</label>
    <input type="number" class="form-control" name="rooms" id="rooms">
  </div>
  <div class="form-group">
    <label for="bathrooms" class="">Bathrooms:</label>
    <input type="number" class="form-control" name="bathrooms" id="bathrooms">
  </div>
  <div class="form-group">
    <label for="details" class="">Details:</label>
    <textarea type="text" class="form-control" name="details" id="details" rows="5"></textarea>
  </div>
  <div class="form-group">
    <label for="img" class="">img:</label>
    <input type="url" class="form-control" name="img" id="img" >
  </div>
  <div class="button-group my-3">
    <button type="reset" class="btn btn-secondary">clear</button>
    <button type="submit" class="btn btn-primary">submit</button>
  </div>
</form>
  `
}