import { renderRegister } from './view/register/Register.ts';
import { renderUserDetails } from'./view/UserDetails/user.ts';



import './style.scss';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

import { setupCounter } from './counter.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = renderRegister();
document.querySelector<HTMLDivElement>('#app')!.innerHTML = renderUserDetails();


setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)


