var data = 

[{
  "title": "Book Fair",
  "description": "Book Fair is on Friday. If your student wants to buy a book, please send them with money.",
  "date": {
    "$date": {
      "$numberLong": "1665730800000"
    }
  }
},{
  "title": "Exam 1 Grades",
  "description": "Exam 1 Grades will be out soon. Please contact me if there are any questions.",
  "date": {
    "$date": {
      "$numberLong": "1666335600000"
    }
  }
},{
  "title": "Show and Tell",
  "description": "Have your student bring a school appropriate item to show the class.",
  "date": {
    "$date": {
      "$numberLong": "1665126000000"
    }
  }
},{
  "title": "Upcoming Exam 2",
  "description": "Reminder: Exam 2 is this Friday. Please contact me if there are any questions.",
  "date": {
    "$date": {
      "$numberLong": "1666940400000"
    }
  }
}]
;


console.log(data.at(0).title);

var myList = document.getElementsByClassName("main")[0].children[0];

console.log(myList.children[0].children[0].textContent); // sub

//myList.children[0].textContent = data.at(0).title;

console.log(myList.children[0].innerHTML);

//myList[0].children[0].children[0].textContent = "test";

function add()
{
    var div = document.getElementById('announcement_content');
    
}