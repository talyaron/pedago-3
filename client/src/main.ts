import './style.css'
import { setupCounter } from './counter.ts'

document.querySelector<HTMLDivElement>('.dashboard')!.innerHTML = `
 <div class="card">
  <div class="card-header">
    Dashboard
  </div>
  <div class="card-body">
    
    
  </div>
</div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
