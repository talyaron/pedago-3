export class Course{
    id: string;
    name: string;

    constructor(name: string) {
        this.id = crypto.randomUUID();
        this.name = name;
    }

}

export const course: Course[]=[];

course.push(new Course('Maths'));

course.push(new Course('Science'));

course.push(new Course('English'));

course.push(new Course('Arabic'));

