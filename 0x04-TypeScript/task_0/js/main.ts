interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'Marwan',
  lastName: 'Fouz',
  age: 22,
  location: 'Alex',
};

const student2: Student = {
  firstName: 'Ahmed',
  lastName: 'Ali',
  age: 25,
  location: 'Alexa',
};

const studentsList: Array<Student> = [student1, student2];

const html = document.querySelector("html");

const body = document.querySelector("body");
html.appendChild(body);

const table = document.createElement("table");
body.appendChild(table);

studentsList.forEach((student) => {
  const tr = document.createElement("tr");
  const td1 = document.createElement("td");
  const td2 = document.createElement("td");

  td1.textContent = student.firstName;
  td2.textContent = student.location;

  tr.appendChild(td1);
  tr.appendChild(td2);
  table.appendChild(tr);
});
