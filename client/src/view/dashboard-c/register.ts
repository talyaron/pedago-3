
export interface Stud{
format():string;
}
export class Student implements Stud{
    name:string;
    phone:number;
    password:string;
    password2: string;
    mail:string;

constructor(n:string, ph:number,pass:string,pass2:string, m:string ){
this.name=n;
this.phone=ph;
this.password=pass;
this.password2=pass2;
this.mail=m;
}

format(){
    return `${name.value, phone.valueAsNumber, password.value, password2.value, mail.value}`
}


}
const mail = document.querySelector('#mail')! as HTMLInputElement;
const form = document.querySelector('#register')! as HTMLInputElement;
const name = document.querySelector('#name')! as HTMLInputElement;
const phone = document.querySelector('#Phone')! as HTMLInputElement;
const password = document.querySelector('#Password')! as HTMLInputElement;
const password2 = document.querySelector('#ps')! as HTMLInputElement;


form.addEventListener('submit',(e:Event)=>
{
e.preventDefault();
const student = new Student(name.value, phone.valueAsNumber, password.value, password2.value, mail.value)!;

const students:Stud[]=[];
students.push(student);
console.log(students);
}
);


// export class StudentInfo{
//     constructor(private container:HTMLElement){

//     }
//     render(student:Stud){
//     const stud = document.querySelector('#stud')! as HTMLElement;
//     const students:Stud[]=[];
//     students.push(student);
//     stud.innerHTML=`students`;
// }
// }
