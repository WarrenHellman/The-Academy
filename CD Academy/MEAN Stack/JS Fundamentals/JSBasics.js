// Write a function called create_dummy_array(). This function should take a number n. Return an array of random numbers between 0 and 9 with the length of n.

function create_dummy_array(n) {
  // let mathalyzer = Math.floor(Math.random()*10)
  let arr= [];
  for (let i=0; i<n; i++) {
    arr[i]=Math.floor(Math.random()*10);
  }
  console.log(arr)
}
create_dummy_array(5);

/////////////////////////////////////////////////
////////////////JS Intermediate//////////////////
/////////////////////////////////////////////////


// Create a function called starString() that takes a number and returns a string of that many *. For example:

function starString(n, input) {
  let stars = "";
  while (0<n){
    stars += input;
    n--;
  }
  console.log(stars);
}


function drawStars(arr) {
  for (let i=0; i<arr.length; i++){
    if (typeof arr[i]=="number"){
      starString(arr[i], '*');
    }
    else if (typeof arr[i]== 'string'){
      let letter = arr[i][0].toLowerCase();
      starString(arr[i].length, letter)
    }
  }
}
let x = [4, "Tom", 1, "Michael", 5, 7, "Jimmy Smith"]

drawStars(x);

