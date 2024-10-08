export class User {
    fullName: string;
    id : string;
    email: string;
    password: string;
    phone?: string;

    constructor (fullName: string, id: string, email: string, password: string, phone: string) {
    {
        this.fullName = fullName;
        this.id = id;
        this.email = email;
        this.password = password;
        this.phone = phone


    }
}
}

export const users: User[] = [];



