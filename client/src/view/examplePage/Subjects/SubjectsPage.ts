export function renderSubjectsPage(): string {
  try {
    return `
     <div class="title"></div>
      <div class="container">
        <aside class="sidebar">
          <div class="logo">LOGO</div>
          <ul class="menu">
            <li>my account</li>
            <li>courses</li>
            <li>zoom</li>
            <li>forum</li>
            <li>lessons</li>
          </ul>
        </aside>
        <main class="content">
        <br/><br/><br/><br/><br/><br/>
          <div class="subject-list">
            <h2 class="subject-title">Subject List</h2>
            <button class="subject-button">Subject 1</button>
            <button class="subject-button">Subject 2</button>
            <button class="subject-button">Subject 3</button>
            <button class="subject-button">Subject 4</button>
          </div>
        </main>
      </div>
    `;
  } catch (error) {
    console.error(error);
    return "";
  }
}
