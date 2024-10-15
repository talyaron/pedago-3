import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './style.scss'

import { courses } from './models/entities/Course.ts';
import { getCourseSubjects } from './controllers/courseSubjectsCont.ts';
import { testCourseSubjects } from './models/joinTables/coursesSubjectModel.ts';
import { renderCourseSubjects } from './view/courseSubjects/courseSubjectView.ts';


try
{
    testCourseSubjects();
    const course = courses.find(u=>u.name === "Geometry");
    if (!course) throw new Error("course not found")

    const courseSubjects = getCourseSubjects(course);

    document.querySelector<HTMLDivElement>('#app')!.innerHTML = renderCourseSubjects(courseSubjects);
}
catch(error)
{
    console.error(error);
}



