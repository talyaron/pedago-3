import { Course } from "../entities/Course";
import { Subject } from "../entities/Subject";

export interface CourseSubjects{
    course:Course;
    subject:Subject;
}

export const courseSubjects:CourseSubjects[]=[];

