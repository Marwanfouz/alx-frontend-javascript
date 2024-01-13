namespace Subjects {
  export interface Teacher {
    firstName: string;
    lastName: string;
    experienceTeachingC?: number;
    experienceTeachingReact?: number;
    experienceTeachingJava?: number;
  }

  export const cTeacher: Teacher = {
    firstName: 'Marwan',
    lastName: 'Fouz',
    experienceTeachingC: 10,
  };
}
