'use strict';
// variable
var studentItems = ['student Name', 'student Grade', 'course'];
var studentTable = document.getElementById('studentTable');
var studentForm = document.getElementById('studentForm');
var allStudents = [];

function Student(name , course){
    this.name = name;
    this.grade = randomFun();
    this.course = course;

    allStudents.push(this);
}

Student.prototype.renderStudent = function(){
    var studentRow = document.createElement('tr');
    var studentElement = [this.name , this.grade , this.course]
    var td ;

    for(var i=0 ; i< studentElement.length; i++){
        td = document.createElement('td');
        td.textContent = studentElement[i];
        studentRow.appendChild(td);
    }
    studentTable.appendChild(studentRow);
}

// function
// render header table
function tableHeader(){
 var headerRow = document.createElement('tr');
 var th;

 for(var i=0 ; i<studentItems.length;i++){
    th = document.createElement('th');
    th.textContent = studentItems[i];
    headerRow.appendChild(th);
 }
 studentTable.appendChild(headerRow);
}

tableHeader();


// random number Function
function randomFun(){
    return Math.floor(Math.random()*(100-0)+0);
}


// add listener to the form
studentForm.addEventListener('submit',studentFormFun);

function studentFormFun(event){
    event.preventDefault();

    var itemName = event.target.itemName.value;
    var courseItem = event.target.courseItem.value;

    if(itemName === ''){
        alert('enter valid data')
    } else{

    var newStudent = new Student(itemName,courseItem);
    localStorage.setItem('Student', JSON.stringify(allStudents));
    newStudent.renderStudent();
    }
}

// render table after refresh the page
function renderAllStudent(){
   if(localStorage.getItem('Student')){
    allStudents = JSON.parse(localStorage.getItem('Student'));


    for(var i=0 ; i<allStudents.length; i++){

    var stuRow = document.createElement('tr');

    var studentNameTd = document.createElement('td');
    studentNameTd.textContent = allStudents[i].name;
    stuRow.appendChild(studentNameTd);

    var studentGradeTd = document.createElement('td');
    studentGradeTd.textContent = allStudents[i].grade;
    stuRow.appendChild(studentGradeTd);

    var studentCourseTd = document.createElement('td');
    studentCourseTd.textContent = allStudents[i].course;
    stuRow.appendChild(studentCourseTd);

    studentTable.appendChild(stuRow);
    }
   }
}

renderAllStudent();

// delete all Row in table

var deleteButton = document.getElementById('Delete')

deleteButton.addEventListener('click',deleteItems);

function deleteItems(event){
  // delete tr from  table just
    var tableRows = studentTable.getElementsByTagName('tr');
    var rowCount = tableRows.length;
    
    for (var x=rowCount-1; x>0; x--) {
        studentTable.removeChild(tableRows[x]);
    }

  // delete tr from loacl storage
  
//   var item = JSON.parse(localStorage.getItem('Student'));

//    for(var i=0 ; i<item.length; i++){
//  }
}