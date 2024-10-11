export function forgetPassword(): string {
    try {
        return `
                <div class="forgetPassword">
                <div class="wrapper">
                    <div class="container">
                        <h1>Forget Password</h1>
                            <form class="forgetPasswordForm">
                            <label>We'll never share your email with anyone else</label>
                            <input id="email" type="text" class="form-control" placeholder="Enter your email address">
                            <br/>
                            <button type="submit" class="btn btn-primary" id="restPassword">Send Rest Password Link</button>
                            </form>
                    </div>
                </div>
                </div>`
    }
    catch (error) {
        console.error('Error in forgetPassword function:', error);
        return "";
    }
}