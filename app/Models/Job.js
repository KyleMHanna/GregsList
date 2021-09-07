import { generateId } from "../Utils/generateId.js"
export class Job {
  constructor(jobData) {
    this.id = jobData.id || generateId()
    this.job = jobData.job
    this.pay = jobData.pay
    this.hours = jobData.hours
    this.benifits = jobData.benifits
    this.img = jobData.img
    this.description = jobData.description
  }
  get JobTemplate() {
    return /*html*/`
    <div class="col-lg-3 mb-4 listing">
      <div class="card">
        <img src="${this.img}" alt="listing image" class="rounded">
        <div class="card-body">
        <h3>  <span> ${this.job} </span></h3>
          <h4 class=" justify-content-between">
            <p><span>  ${this.pay} Pay</span></p>
            <p><span> ${this.hours} Hours</span></p>
            <p><span> ${this.benifits} benifits </span></p>
            </h4>
            <h5>Description: ${this.description}</h5>
        </div>
      </div>
    </div>
    `
  }
}