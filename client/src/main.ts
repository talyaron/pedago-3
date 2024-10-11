import './style.css'
// import { setupCounter } from './counter.ts'
import { Student, StudentInfo } from './view/dashboard-c/register.ts'


const stud = document.querySelector('#stud')!;
const students = new StudentInfo(stud);
students.render(Student);

// document.querySelector<HTMLDivElement>('#stud')!.innerHTML = `
//  <div class="card">
//   <div class="card-header">
//     Student
//   </div>
//   <div class="card-body">
//     ${Student}
    
//   </div>
// </div>
// `

// setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
