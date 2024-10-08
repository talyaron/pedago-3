import './style.css'

import { setupCounter } from './counter.ts'
import { renderExamplePage } from './view/examplePage/ExamplePage.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = renderExamplePage();

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
