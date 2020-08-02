//harder method 
console.log("Harder Method of assignment4 :");
(function () {

var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];


for (var i = 0; i < names.length; i++) {

  var firstLetter =names[i][0];

  if( (firstLetter ==='j')||(firstLetter ==='J') )
  console.log("Bye "+ names[i]);
else
  console.log("Hello "+names[i]);

}

})();
//easier method
console.log("Easier Method of assignment4 :");
(function () {

var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];


for (var i = 0; i < names.length; i++) {

  var firstLetter = names[i].charAt(0).toLowerCase();

 
  if (firstLetter === 'j') {
    console.log("Bye "+ names[i]);
  }
  else {
  console.log("Hello "+names[i]);
  }
}

})();
