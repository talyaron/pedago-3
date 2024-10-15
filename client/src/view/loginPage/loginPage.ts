export function renderRegister(): string {
    try {
        return `
        <div class="container">
               <img class="back-image" src="./src/images/back-image.png" alt="back image">
            <h1>Login</h1>
            <form id="registerForm">
                <label for="email"></label>
                <input type="email"  id="email" name="email" required placeholder="Email:">
                
                <label for="password"></label>
                <input type="password"  id="password" name="password" required placeholder="Password:">
                
                <a href="forgot-password.html" class="forgot-password" >Forgot Password?</a>
                <button class="btn" type="submit">Login</button>

            </form>
        </div>
    `;
    } catch (error) {
        console.error(error);
        return "";
    }
}
