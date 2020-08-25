class Student{
	constructor(firstName, lastName, year){
		this.firstName = firstName;
		this.lastName = lastName;
		this.grade = year;
		this.tardies = 0;
		this.scores = [];
	}

	// instance method
	fullName(){
		return `Your full name is ${this.firstName} ${this.lastName}`;
	}

	markLate(){
		this.tardies += 1;
		if(this.tardies >= 3) return "Expelled.";
		return `${this.firstName} ${this.lastName} has been late ${this.tardies} times`;
	}

	addScore(score){
		this.scores.push(score);
		return this.scores;
	}

	calculateAverage(){
		let sum = this.scores.reduce(function(a,b){return a+b});
		return sum/this.scores.length;
	}

	// static methods
	static enrollStudents(){
		return "Enrolled";
	}
}

let firstStudent = new Student("Colt", "Steele");
let secondStudent = new Student("Blue", "Steele");

console.log("instance methods--------------------");
console.log(firstStudent.tardies);
console.log(firstStudent.markLate());
console.log(firstStudent.tardies);
console.log(firstStudent.markLate());
console.log(firstStudent.markLate());
console.log(firstStudent.tardies);

console.log("instance methods with arguments--------------------");
console.log(secondStudent.addScore(92));
console.log(secondStudent.addScore(87));
console.log(secondStudent.calculateAverage());

console.log("static method--------------------");
console.log(Student.enrollStudents());
