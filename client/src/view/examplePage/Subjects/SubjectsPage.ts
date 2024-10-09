export function renderSubjectsPage(): string {
    try {
      // Create container
      const container = document.createElement('div');
      container.style.display = 'flex';
      container.style.height = '100vh';
      document.body.appendChild(container);
  
      // Create sidebar
      const sidebar = document.createElement('aside');
      sidebar.style.backgroundColor = '#024c8c';
      sidebar.style.color = 'white';
      sidebar.style.padding = '20px';
      sidebar.style.width = '20%';
      container.appendChild(sidebar);
  
      // Create logo
      const logo = document.createElement('div');
      logo.textContent = 'LOGO';
      logo.style.fontSize = '1.5em';
      logo.style.marginBottom = '30px';
      sidebar.appendChild(logo);
  
      // Create menu
      const menuItems = ['my account', 'courses', 'zoom', 'forum', 'lessons'];
      const menu = document.createElement('ul');
      menu.style.listStyleType = 'none';
      sidebar.appendChild(menu);
  
      menuItems.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        li.style.margin = '10px 0';
        menu.appendChild(li);
      });
  
      // Create content area
      const content = document.createElement('main');
      content.style.backgroundColor = '#e0e7f1';
      content.style.width = '80%';
      content.style.padding = '20px';
      container.appendChild(content);
  
      // Create subject list
      const subjectList = document.createElement('div');
      subjectList.style.backgroundColor = '#fff';
      subjectList.style.padding = '20px';
      subjectList.style.border = '2px solid #ffcc00';
      subjectList.style.borderRadius = '10px';
      content.appendChild(subjectList);
  
      // Create subject list title
      const subjectTitle = document.createElement('h2');
      subjectTitle.textContent = 'Subject List';
      subjectTitle.style.textAlign = 'center';
      subjectTitle.style.marginBottom = '20px';
      subjectList.appendChild(subjectTitle);
  
      // Create subjects
      const subjects = ['Subject 1', 'Subject 2', 'Subject 3', 'Subject 4'];
  
      subjects.forEach(subjectName => {
        const subjectButton = document.createElement('button');
        subjectButton.textContent = subjectName;
        subjectButton.style.display = 'block';
        subjectButton.style.width = '100%';
        subjectButton.style.padding = '15px';
        subjectButton.style.marginBottom = '10px';
        subjectButton.style.backgroundColor = '#b3c6ff';
        subjectButton.style.border = 'none';
        subjectButton.style.borderRadius = '5px';
        subjectButton.style.fontSize = '1.2em';
        subjectButton.style.cursor = 'pointer';
        subjectButton.style.boxShadow = '0px 3px 5px rgba(0, 0, 0, 0.2)';
  
        // Add hover effect
        subjectButton.addEventListener('mouseover', () => {
          subjectButton.style.backgroundColor = '#809fff';
        });
        subjectButton.addEventListener('mouseout', () => {
          subjectButton.style.backgroundColor = '#b3c6ff';
        });
  
        // Add click event
        subjectButton.addEventListener('click', () => {
          alert(subjectName + ' clicked');
        });
  
        subjectList.appendChild(subjectButton);
      });
  
      return ''; 
    } catch (error) {
      console.error(error);
      return ''; 
    }
  }
  