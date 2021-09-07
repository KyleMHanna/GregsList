import { ProxyState } from "../AppState.js"
import { jobService } from "../Services/JobService.js"
import { getJobFormTemplate } from "../forms/jobform.js"

function _drawJobs() {
  let template = ''
  ProxyState.jobs.forEach(job => template += job.JobTemplate)
  document.getElementById('listings').innerHTML = template
}

export class JobsController {
  constructor() {
    ProxyState.on('jobs',_drawJobs)
      jobService.getJobs()
  }

 async addJob() {
  event.preventDefault()
  /**
     * @type {HTMLFormElement}
     */
    // @ts-ignore
    const form = event.target
    
    const jobData = {
    jobTitle: form.jobTitle.value,
    company: form.company.value,
    rate:  form.rate.value,
    hours: form.hours.value,
    description: form.description.value
    }
    try {
    await jobService.addJob(jobData)
    } catch (e) {
    form.make.classList.add('border-danger')
      console.error('[TODO] you were supposed to do this', e)
      return
    }
    form.reset()
  }
    showJobs() {
    _drawJobs()
    document.getElementById('controls').innerHTML = `
      <button class="btn btn-success" onclick="app.jobsController.toggleJobForm()">Add Job</button>
    `
    document.getElementById('forms').innerHTML = getJobFormTemplate()

  }
toggleJobForm() {
  
    document.getElementById('job-form').classList.toggle('visually-hidden')}


async deleteJob (jobId){
    try {
      await jobService.deleteJob(jobId)
    } catch (error) {
      alert(error.messsage)
      
    }
  }

}