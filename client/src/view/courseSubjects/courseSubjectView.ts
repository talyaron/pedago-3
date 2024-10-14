import { Subject } from "../../models/entities/Subject";

export function renderCourseSubjects(subjects:Subject[]) {
    return `
    <div class="row">
        
    </div>
    <div class="row">
        <div class="col-12">
            <ul class="list-group">
                ${subjects.map(subject => `
                    <li class="list-group-item">${subject.name} </li>
                `).join('')}    
            </ul>
        </div>
    </div>`;
}
