
export class Job {
  constructor(jobData) {
    this.id = jobData.id 
    this.jobTitle = jobData.jobTitle
    this.company = jobData.company
    this.rate = jobData.rate
    this.hours = jobData.hours
    this.description = jobData.description
  }
  get JobTemplate() {
    return /*html*/`
    <div class="col-lg-3 mb-4 listing">
      <div class="card">
        <div class="card-body">
        <h3>  <span> ${this.jobTitle} </span></h3>
          <h4 class=" justify-content-between">
          <p><span> ${this.company} benifits </span></p>
            <p><span>  ${this.rate} Pay</span></p>
            <p><span> ${this.hours} Hours</span></p>
            </h4>
            <h5>Description: ${this.description}</h5>
        <button class="btn btn-danger" onclick="app.jobsController.deleteJob('${this.id}')">Delete</button>
        </div>
      </div>
    </div>
    `
  }
}