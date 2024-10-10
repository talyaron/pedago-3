export class Subject {
    id: string;
    name: string;
    
    constructor(name: string) {
        this.id = crypto.randomUUID();
        this.name = name;
    }
}

export const subjects: Subject[] = [];

subjects.push(new Subject('Maths'));

subjects.push(new Subject('Science'));

subjects.push(new Subject('English'));

subjects.push(new Subject('Arabic'));

