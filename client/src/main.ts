import './style.scss';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

import { setupCounter } from './counter.ts'
import { renderExamplePage } from './view/examplePage/ExamplePage.ts'
import { renderNavbarPage } from './view/navPage/NavPage.ts'
document.querySelector<HTMLDivElement>('#app')!.innerHTML = renderExamplePage();

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
