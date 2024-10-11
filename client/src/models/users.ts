import { Course } from "./Course";

export class User {
    fullName: string;
    id : string;
    email: string;
    password: string;
    phone?: string;
    courses: string[] = [
        "AlgebraCourseId"
    ];

    constructor (fullName: string, email: string, password: string, phone: string) {
    {
        this.fullName = fullName;
        this.id = crypto.randomUUID();
        this.email = email;
        this.password = password;
        this.phone = phone


    }
}
}

export const users: User[] = [];




