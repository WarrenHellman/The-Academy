// Write a function that accepts an array of student objects, as shown below. Print all of the students' names and their cohorts.

let students = [
  {name: 'Remy', cohort: 'Jan'},
  {name: 'Genevieve', cohort: 'March'},
  {name: 'Chuck', cohort: 'Jan'},
  {name: 'Osmund', cohort: 'June'},
  {name: 'Nikki', cohort: 'June'},
  {name: 'Boris', cohort: 'June'}
];

function roster(arr) {
  for (let i=0; i<arr.length; i++){
    console.log("Name: "+arr[i].name+", Cohort:"+arr[i].cohort)
  }
}

// roster(students)

// Write a function that accepts an object of users divided into employees and managers, as shown below, and logs the information to the console.

let users = {
    employees: [
        {'first_name':  'Miguel', 'last_name' : 'Jones'},
        {'first_name' : 'Ernie', 'last_name' : 'Bertson'},
        {'first_name' : 'Nora', 'last_name' : 'Lu'},
        {'first_name' : 'Sally', 'last_name' : 'Barkyoumb'}
    ],
    managers: [
        {'first_name' : 'Lillian', 'last_name' : 'Chambers'},
        {'first_name' : 'Gordon', 'last_name' : 'Poe'}
    ]
};

function businessRoster(obj){
  console.log('Employees')
  for (let i=0; i<obj.employees.length; i++){
    console.log(i+1+' - '+obj.employees[i].last_name.toUpperCase()+", "+obj.employees[i].first_name.toUpperCase()+" - "+(obj.employees[i].first_name.length+ obj.employees[i].last_name.length))
  }
  console.log('Managers');
  for (let i=0; i<obj.managers.length; i++){
    console.log(i+1+' - '+obj.managers[i].last_name.toUpperCase()+", "+obj.managers[i].first_name.toUpperCase()+" - "+(obj.managers[i].first_name.length+ obj.managers[i].last_name.length))
  }
}

// businessRoster(users)

// 1 - JONES, MIGUEL - 11