export class Subject {
    subjectID: string;
    name: string;

    constructor(id: string, name: string) {
        this.subjectID = id;
        this.name = name;
    }
}

export const subject: Subject[] = [];

subject.push(new Subject("1", "Mathematics"));
subject.push(new Subject("2", "English"));
subject.push(new Subject("3", "Python"));
