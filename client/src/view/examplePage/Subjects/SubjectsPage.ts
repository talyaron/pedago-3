export function renderSubjectsPage(): string {
  try {
    return `
    <div class="title"></div>
     <div class="container-fluid">
       <div class="row">
         <aside class="col-md-3 bg-primary text-white vh-100">
           <div class="p-4">
             <div class="fs-3 mb-4 logo">LOGO</div>
             <ul class="nav flex-column menu">
               <li class="nav-item mb-2"><a href="#" class="nav-link text-white">my account</a></li>
               <li class="nav-item mb-2"><a href="#" class="nav-link text-white">courses</a></li>
               <li class="nav-item mb-2"><a href="#" class="nav-link text-white">zoom</a></li>
               <li class="nav-item mb-2"><a href="#" class="nav-link text-white">forum</a></li>
               <li class="nav-item mb-2"><a href="#" class="nav-link text-white">lessons</a></li>
             </ul>
           </div>
         </aside>
         <main class="col-md-9 bg-light">
           <div class="container py-5"style="margin-top: 15vh;">
             <div class="card shadow p-4">
               <h2 class="card-title text-center mb-4">Subject List</h2>
               <div class="d-grid gap-3">
                 <button class="btn btn-primary btn-lg">Subject 1</button>
                 <button class="btn btn-primary btn-lg">Subject 2</button>
                 <button class="btn btn-primary btn-lg">Subject 3</button>
                 <button class="btn btn-primary btn-lg">Subject 4</button>
               </div>
             </div>
           </div>
         </main>
       </div>
     </div>
    `;
  } catch (error) {
    console.error(error);
    return "";
  }
}
