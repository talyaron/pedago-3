import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './style.scss'

import { registerUsers } from './models/joinTables/usersCoursesModel.ts';
import { users } from './models/entities/users.ts';
import { getUserCourses } from './controllers/userCoursesCont.ts';
import { renderUserCourses } from './view/userCouses/UserCoursesView.ts';


try
{
    registerUsers();
    const rana = users.find(u=>u.fullName === "Rana");
    if (!rana) throw new Error("User not found")

    const userCoursers = getUserCourses(rana);

    document.querySelector<HTMLDivElement>('#app')!.innerHTML = renderUserCourses(userCoursers);
}
catch(error)
{
    console.error(error);
}



