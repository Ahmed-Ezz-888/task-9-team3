
let score = prompt("Enter your score (0 - 100):");

let attendance =true; 

if (attendance= confirm("Do you have good attendance? (yes / no):")=== attendance) {
    score = score + 3;
}
if (score > 100) {
    score = 100;
}
let grade;
if (score >= 90) {
    grade = "A";
} 
else if (score >= 80) {
    grade = "B";
} 
else if (score >= 70) {
    grade = "C";
} 
else if (score >= 60) {
    grade = "D";
} 
else {
    grade = "F";
}
let status;
if (score >= 50) {
    Status = "PASS";
} 
else {
    Status = "FAIL";
}
console.log("Final Score = " + score);
console.log("Grade = " + grade);
console.log("Status = " + Status);