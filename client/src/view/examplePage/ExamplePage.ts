export function renderExamplePage(): string {
    try {
        return `
        <div>
        <h1>Example Page</h1>
        <p>This is an example page.</p>
        </div>
    `;
    } catch (error) {
        console.error(error);
        return "";
        
    }
   
}