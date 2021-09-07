export function getHouseFormTemplate() {
  return /*html*/`
  <form class="bg-white rounded p-3 shadow visually-hidden" onsubmit="app.housesController.addHouse()"
  id="house-form">
  <div class="form-group">
    <label for="price" class="">Price:</label>
    <input name="price" id="price"  class="form-control">
  </div>
  <div class="form-group">
    <label for="year" class="">year:</label>
    <input type="number" class="form-control" name="year" id="year">
  </div>
  <div class="form-group">
    <label for="levels" class="">levels:</label>
    <input type="text" class="form-control" name="levels" id="levels">
  </div>

  <div class="form-group">
    <label for="bedrooms" class="">Bedrooms:</label>
    <input type="number" class="form-control" name="bedrooms" id="bedrooms">
  </div>
  <div class="form-group">
    <label for="bathrooms" class="">Bathrooms:</label>
    <input type="number" class="form-control" name="bathrooms" id="bathrooms">
  </div>
  <div class="form-group">
    <label for="description" class="">Description:</label>
    <textarea type="text" class="form-control" name="description" id="description" rows="5"></textarea>
  </div>
  <div class="form-group">
    <label for="imgUrl" class="">img:</label>
    <input type="url" class="form-control" name="imgUrl" id="imgUrl" >
  </div>
  <div class="button-group my-3">
    <button type="reset" class="btn btn-secondary">clear</button>
    <button type="submit" class="btn btn-primary">submit</button>
  </div>
</form>
  `
}