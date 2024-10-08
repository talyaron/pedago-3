export class Course{
    id: number;
    name: string;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }

}

export const course: Course[]=[];

course.push(new Course(1, 'Maths'));

course.push(new Course(2, 'Science'));

course.push(new Course(3, 'English'));

course.push(new Course(4, 'Arabic'));

