export function renderNavbarPage(): string {
  try {
      return `
      <nav>
      <ul>
      <img class="" src="">
      <li><a class="" href="">My Account</a></li>
      <li><a class="" href="">Courses</a></li>
      <li><a class="" href="">Zoom</a></li>
      <li><a class="" href="">Forum</a></li>
      <li><a class="" href="">Lessons</a></li>

      </ul>
      </nav>
  `;
  } catch (error) {
      console.error(error);
      return "";
      
  }
 
}