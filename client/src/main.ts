<<<<<<< HEAD
import { renderRegister } from './view/register/Register.ts';
import { renderUserDetails } from'./view/UserDetails/user.ts';
=======
>>>>>>> upstream/main



import './style.scss';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

import { setupCounter } from './counter.ts'
import { renderHeader } from './view/header/header.ts';

<<<<<<< HEAD
document.querySelector<HTMLDivElement>('#app')!.innerHTML = renderRegister();
document.querySelector<HTMLDivElement>('#app')!.innerHTML = renderUserDetails();

=======
document.querySelector<HTMLDivElement>('#app')!.innerHTML = renderHeader();
>>>>>>> upstream/main

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)


