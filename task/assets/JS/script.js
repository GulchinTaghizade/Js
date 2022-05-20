function Student(name, surname, paid, pin, gpa) {
  this.firstName = name;
  this.lastName = surname;
  this.paid = paid;
  this.pin = pin;
  this.gpa = gpa;

  this.getFullName = () => {
    return this.firstName + " " + this.lastName;
  };
}
// console.log(Gulchin.getFullName());

function Class(name, degree, currentYear, students = []) {
  this.name = name;
  this.degree = degree;
  this.currentYear = currentYear;
  this.students = students;
  this.addStudent = (student) => {
    this.students.push(student);
  };
  this.removeStudent = (pin) => {
    this.students = this.students.filter((student) => student.pin !== pin);
  };

   // // Arguments: PIN, ClassName
  // // 2. Find all students kiminki GPA-i 80 den yuxaridir

  this.GPAfilter = (gpa) => {
    return this.students.filter((item) => item.gpa > gpa);
  };
}

// BP201.addStudent(Gulchin);
// console.log(students[0]);

function University(name, location, classes = []) {
  this.name = name;
  this.location = location;
  this.classes = classes;
  this.addClass = (group) => {
    this.classes.push(group);
  };

  //. Create a method to transfer student from one class to another one
  //Inputs: Student, className
  this.transferStudent = (student, className) => {
    let qrup = this.classes.find((item) => {
      return item.students.some((telebe)=>telebe.pin===student.pin)
    });
    console.log(qrup);
    let telebe = qrup.students.find((item) => item.pin == student.pin);
    console.log(telebe);
    className.addStudent(telebe);
    console.log(className.students);
    qrup.removeStudent(student.pin);
    console.log(qrup.students);
  };

}

//Students
const Gulchin = new Student(
  "Gulchin",
  "Taghizade",
  "state-funded",
  "3009",
  "97.73"
);
const Ilahe = new Student("Ilahe", "Taghizade", "state-funded", "3010", "95");
const Samir = new Student("Samir", "Taghizade", "state-funded", "3011", "85");
const Murad = new Student("Murad", "Taghizade", "state-funded", "3012", "59");

//Classes
const BP201 = new Class("BP201", "Bachelor", "2022");
const BP202 = new Class("BP202", "Bachelor", "2023");

BP201.addStudent(Gulchin);
BP201.addStudent(Ilahe);
BP201.addStudent(Murad);
BP201.addStudent(Samir);
// console.log(BP201.students);
//Universities
const BDU = new University("BDU", "Elmler");
const ADNSU = new University("ADNSU", "28 May");

BDU.addClass(BP201);
BDU.addClass(BP202);
// BDU.transferStudent(Gulchin, BP202); 

console.log(BP201.GPAfilter(90));
