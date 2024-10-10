import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'
import { forgetPassword } from './view/forgetPassword/forgetPassword.ts'
import { emailCheck } from './controller/emailCheck.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = forgetPassword();
const RestPasswordButton = document.getElementById("restPassword") as HTMLButtonElement;

RestPasswordButton.addEventListener('click', () => {
  const email = document.getElementById("email") as HTMLButtonElement;
  if (email)
    alert(emailCheck(email.value));

});
