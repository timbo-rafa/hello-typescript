var mysearch;
mysearch = function (keywords) {
    return false;
};
var mynumbersearch;
mynumbersearch = function (first, second) {
    return first < second;
};
var Professor = /** @class */ (function () {
    function Professor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    return Professor;
}());
var Student = /** @class */ (function () {
    function Student(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Student.prototype.search = function (source, subString) {
        return false;
    };
    return Student;
}());
function greeterFunction(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var Greeter = /** @class */ (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () { return "Hello, " + this.greeting; };
    return Greeter;
}());
var greeter;
greeter = new Greeter("world");
console.log(greeter.greet());
var user = new Student("Jane", "User");
var u2 = new Professor("Albert", "Einstein");
document.body.innerHTML = greeterFunction(user);
document.body.innerHTML = greeterFunction(u2);
console.log("Hello,", user);
console.log("Hello,", u2);
//# sourceMappingURL=app.js.map