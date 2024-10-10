export function renderLoginPage () : string{
    return `
    <div>
        <div class = "container">
            <h1 class = "display4 Login"> Login </h1>
            <form class = "mb-3">
                <label for="Email">Email:</label><br>
                <input type="text" id="Email" name="Email"><br>
                <label for="Password">Password</label><br>
                <input type="Password" id="Password" name="Password"><br>
                <button type="submit">Log in</button>
            </form> 
        </div>
    </div>`;
}