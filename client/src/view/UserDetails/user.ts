import imgStudent from './images/student.jpeg'
import imgProgress from './images/progress.png'

export function renderUserDetails():string {
    return `
    <div class="container text-center">
  <div class="row">
    <div class="col">
    <h2 class="display-6"> Welcome back <span class="badge text-bg-secondary">Anna</span> </h2>
    <h2 class="display-6"> course: <span class="badge text-bg-secondary">FullStack</span></h2>
    <h2 class="display-6"> last entered:<span class="badge text-bg-secondary">10/10/2024</span>
    </div>
    <div class="col">
    <img src=${imgStudent} alt="User's Image">
    </div>
    <div class="col">
    <img src=${imgProgress} alt="progress">
    </div>
  </div>
</div>


    `
}