
/* student info */
let students = [
    {name: 'Ben', grade: 50, passed: false},
    {name: 'Max', grade: 60, passed: true},
    {name: 'Jon', grade: 90, passed: true},
    {name: 'Doe', grade: 80, passed: true},
    {name: 'Jaz', grade: 35, passed: false}
];

/* display students who passed */
for (let student of students){
    if (!student.passed) continue; // student failed 
    console.log(`🚀student passed: ${student.name} \n 📛 name: ${student.name} \n 📊 grade: ${student.grade} \n ✔ status: passed`);

    // check for honor rolls 
    if (student.grade >= 90) {
        console.log('🏅Honor Roll!');
    }

    console.log('\n ---------- \n');
}

/* calc total number of students who passed */
let passedCount = 0;

for (let student of students){
    if (student.passed) passedCount++;
}

console.log(`✅ Total Students Passed: ${passedCount}`);