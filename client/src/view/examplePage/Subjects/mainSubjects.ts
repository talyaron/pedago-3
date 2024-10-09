import { renderSubjectsPage } from './SubjectsPage.ts';

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector<HTMLDivElement>('#SubjectsPage')!.innerHTML = renderSubjectsPage();
    
});
