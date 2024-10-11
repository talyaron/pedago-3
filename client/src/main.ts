
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './style.scss'
import { forgetPassword } from './view/forgetPassword/forgetPassword.ts';

import { renderLessons } from './view/lessons/Lessons.ts';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = forgetPassword.toString();;




