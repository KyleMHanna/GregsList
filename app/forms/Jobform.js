export function getJobFormTemplate() {
  return /*html*/`
  <form class="bg-white rounded p-3 shadow visually-hidden" onsubmit="app.jobsController.addJob()"
  id="job-form">
  <div class="form-group">
    <label for="jobTitle" class="">jobTitle:</label>
    <input name="jobTitle" id="jobTitle"  class="form-control">
  </div>
  <div class="form-group">
    <label for="company" class="">company:</label>
    <input type="text" class="form-control" name="company" id="company">
  </div>
  <div class="form-group">
    <label for="rate" class="">rate:</label>
    <input type="text" class="form-control" name="rate" id="rate">
  </div>

  <div class="form-group">
    <label for="hours" class="">hours:</label>
    <input type="number" class="form-control" name="hours" id="hours">

  <div class="form-group">
    <label for="description" class="">Description:</label>
    <textarea type="text" class="form-control" name="description" id="description" rows="5"></textarea>
  </div>
  <div class="button-group my-3">
    <button type="reset" class="btn btn-secondary">clear</button>
    <button type="submit" class="btn btn-primary">submit</button>
  </div>
</form>
  `
}