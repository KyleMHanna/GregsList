import { ProxyState } from "../AppState.js"
import { houseService } from "../Services/HouseService.js"
import { getJobFormTemplate } from "../forms/jobform.js"

function _drawJobs() {
  let template = ''
  ProxyState.jobs.forEach(job => template += job.JobTemplate)
  document.getElementById('listings').innerHTML = template
}

export class JobsController {
  constructor() {
    ProxyState.on('jobs',_drawJobs)
  }

  addJob() {
       event.preventDefault()
  /**
     * @type {HTMLFormElement}
     */
    // @ts-ignore
    const form = event.target
    
    const jobData = {
      
    }
  }
}