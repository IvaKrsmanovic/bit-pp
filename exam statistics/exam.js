import { Subject, Student, Exam } from './exam-classes.js'

$(document).ready(function () {
    $("#buttonAdd").click(function (e) {
        e.preventDefault();

        var subjectName = $('#SubjectSelect').find(":selected").text();
        var stringName = $('#studentName').val();
        var studentGrade = $('#grade').val();

        function fillForm() {
            var studentNameFull = stringName.split(' ');
            var studentName = studentNameFull[0].toLowerCase()[0].toUpperCase() + studentNameFull[0].toLowerCase().substring(1);
            var studentSurname = studentNameFull[1].toLowerCase()[0].toUpperCase() + studentNameFull[1].toLowerCase().substring(1);
            var student = new Student(studentName, studentSurname);

            var subject = new Subject(subjectName);
            var exam = new Exam(subject, student, studentGrade);

            if (studentGrade <= 5 & studentGrade > 1) {
                var result = $(`<div class="row" id="failed">
            <div class="col-7" id="student-info">${subject.name} - ${student.name} ${student.surname}</div>
            <div class="col-1 offset-4" id="student-grade-failed"> ${studentGrade} </div>
            </div>`);

                var counter = Number($('#failedNo').html())
                counter += 1
                $('#failedNo').html(counter)

                $("#failed").append(result);
                $('#form')[0].reset();

            } else if (studentGrade > 5 & studentGrade <= 10) {
                var result = $(`<div class="row" id="passed">
            <div class="col-7" id="student-info">${subject.name} - ${student.name} ${student.surname}</div>
            <div class="col-1 offset-4" id="student-grade"> ${studentGrade} </div>
            </div>`);

                var counter = Number($('#passedNo').html())
                counter += 1
                $('#passedNo').html(counter)

                $("#passed").append(result);
                $('#form')[0].reset();
            }

            var failedStudents = Number($('#failedNo').html())
            var total = failedStudents + Number($('#passedNo').html())

            if (isNaN(total) == false & failedStudents != 0) {
                $('#failedPerc').html(`, ${(failedStudents / total * 100).toFixed(1)}%`)
            }
        }

        if (subjectName === 'Subject') {
            alert('Please select subject!');
        } else if (studentGrade > 10 || studentGrade < 0 || studentGrade % 1 != 0) {
            alert('Incorrect grade!')
        } 
        else if (/\s/g.test(stringName) == false) {
            alert('Please insert name and surname separately!')
        } 
        else if (/[^a-zA-Z]/g.test(stringName.replace(/\s/g, "")) == true ) {
            alert('No special characters!')
        }
        else {
            fillForm();
        }
    });

});