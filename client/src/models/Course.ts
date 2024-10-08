export class Course{
    id: number;
    name: string;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }

}

export interface Subject {
    name: string;
    id: number;
}