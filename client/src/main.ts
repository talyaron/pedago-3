import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './style.scss'

import { renderHeader } from './view/header/header.ts';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = renderHeader();




