import './style.scss';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

import { setupCounter } from './counter.ts'

import { renderSubjectsPage } from './view/examplePage/Subjects/SubjectsPage.ts';

document.querySelector<HTMLDivElement>('#app')!.innerHTML =renderSubjectsPage();

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)

