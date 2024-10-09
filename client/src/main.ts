import './style.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import { setupCounter } from './counter.ts';
import { renderExamplePage } from './view/examplePage/ExamplePage.ts';
import { renderSubjectsPage } from './view/examplePage/SubjectsPage.ts';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = renderExamplePage();


setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)

document.addEventListener('DOMContentLoaded', () => {
   
    document.querySelector<HTMLDivElement>('#SubjectsPage')!.innerHTML = renderSubjectsPage();
});
function renderSubjectsPage(): string {
    throw new Error('Function not implemented.');
}

