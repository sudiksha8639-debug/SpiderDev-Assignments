
let studentName = prompt("Enter student name:");

let marks = [];
let total = 0;
let highest = -1;
let lowest = 101;

for (let i = 0; i < 5; i++) {
    let mark = Number(prompt("Enter marks for Subject " + (i + 1)));

    while (mark < 0 || mark > 100 || isNaN(mark)) {
        mark = Number(prompt("Invalid marks. Enter again (0-100):"));
    }

    marks.push(mark);
    total += mark;

    if (mark > highest) highest = mark;
    if (mark < lowest) lowest = mark;
}

let average = total / 5;
let percentage = average;

let grade = "";

if (percentage >= 90) {
    grade = "A+";
} else if (percentage >= 80) {
    grade = "A";
} else if (percentage >= 70) {
    grade = "B";
} else if (percentage >= 60) {
    grade = "C";
} else {
    grade = "Fail";
}

let day = prompt("Enter day (Monday-Sunday):");

let message = "";

switch (day.toLowerCase()) {
    case "monday":
        message = "Start your week strong!";
        break;
    case "tuesday":
        message = "Keep learning!";
        break;
    case "wednesday":
        message = "Halfway there!";
        break;
    case "thursday":
        message = "Stay focused!";
        break;
    case "friday":
        message = "Finish the week with confidence!";
        break;
    case "saturday":
        message = "Enjoy and recharge!";
        break;
    case "sunday":
        message = "Prepare for a new week!";
        break;
    default:
        message = "Invalid day.";
}

let result = "Student Name: " + studentName + "\n\n";

for (let i = 0; i < 5; i++) {
    result += "Subject " + (i + 1) + ": " + marks[i] + "\n";
}

result += "\nTotal: " + total;
result += "\nAverage: " + average;
result += "\nPercentage: " + percentage + "%";
result += "\nGrade: " + grade;
result += "\nHighest Marks: " + highest;
result += "\nLowest Marks: " + lowest;
result += "\nMessage: " + message;

alert(result);