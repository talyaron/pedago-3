import { renderRegister } from './view/register/Register.ts';


import './style.scss';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

import { setupCounter } from './counter.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = renderRegister();

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)


