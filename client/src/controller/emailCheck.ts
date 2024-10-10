export function emailCheck(email: string) : string {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(email))
        return '✅ You write good email ✅';
    else
    return "❌ Your email is invalid my friend ❌";

}