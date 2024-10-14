import { Course, courses } from "../entities/Course";
import { User, users } from "../entities/users";

// join Table
export interface UserCourse {
    userId: string;
    courseId: string;
}

export const userCourses: UserCourse[] = [
 
]

export function registerUsers() {
    userCourses.push(
        {
        userId:users.find((user:User) => user.fullName == "Aviad")!.id,
        courseId:courses.find((course:Course) => course.name === "Algebra Linear")!.id
        });
    userCourses.push(
        {
            userId:users.find((user:User) => user.fullName == "Rana")!.id,
            courseId:courses.find((course:Course) => course.name === "Algebra Linear")!.id
        });
    userCourses.push(
        {
            userId:users.find((user:User) => user.fullName == "Rana")!.id,
            courseId:courses.find((course:Course) => course.name === "Geometry")!.id
        });
    userCourses.push(
        {
            userId:users.find((user:User) => user.fullName == "Rana")!.id,
            courseId:courses.find((course:Course) => course.name === "Arts")!.id
        });
    userCourses.push(
        {
            userId:users.find((user:User) => user.fullName == "Yonatan")!.id,
            courseId:courses.find((course:Course) => course.name === "Arts")!.id
        });
}

