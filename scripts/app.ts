interface SearchInt {
  (keywords: string): boolean
}

let mysearch:SearchInt;
interface Compare {
  (first: number, second: number): boolean
}

mysearch = function(keywords: string) {
  return false
}

let mynumbersearch:Compare;
mynumbersearch = function(first: number, second:number) {
  return first<second
}

interface Person { 
	firstName: string; 
  lastName: string;
  //search (source: string, subString: string): boolean;  
} 
class Professor implements Person {
  constructor(public firstName, public lastName) {
    this.firstName = firstName
    this.lastName = lastName
  }
}

class Student implements Person { 
	
	constructor(public firstName, 
		    public lastName) { 
		this.firstName = firstName;
		this.lastName = lastName; 
  } 
  
  search (source: string, subString: string): boolean {
    return false
  }
} 

function greeterFunction(person : Person) { 
	return "Hello, " + person.firstName + " " + person.lastName; 
} 

class Greeter { 
	greeting: string; 
	constructor(message: string) { 
		this.greeting = message; 
	}
	 greet() { return "Hello, " + this.greeting; } 
} 

let greeter: Greeter; 

greeter = new Greeter("world"); 

console.log(greeter.greet());

var user = new Student("Jane", "User"); 
var u2   = new Professor("Albert", "Einstein")

document.body.innerHTML = greeterFunction(user)
document.body.innerHTML = greeterFunction(u2)

console.log("Hello,", user)
console.log("Hello,", u2)