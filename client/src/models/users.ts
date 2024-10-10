export class User {
    fullName: string;
    id : string;
    email: string;
    phone: string;

    constructor (fullName: string, email: string, phone: string) {
    {
        this.fullName = fullName;
        this.id = crypto.randomUUID();
        this.email = email;
        this.phone = phone


    }
}
}

export const users: User[] = [];

users.push(new User('John Doe', 'john.doe@example.com', '1234567890'));

users.push(new User('Jane Doe', 'jane.doe@example.com', '0987654321'));

users.push(new User('Alice Doe', 'alice.doe@example.com', '9876543210'));

users.push(new User('Bob Smith', 'bob.smith@example.com', '5555555555'));