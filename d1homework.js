var name = 'Keith';

var printName = function() {
  console.log('My name is ' + name );
}

printName();

// will print "My name is Keith" - the name variable is in the global scope so the function can see it

score = 5;

var result = function() {
  var score = 3;
  return score;
}

console.log(result());

// will print 3 - there is a global variable and a local variable within scope, so the value of the local variable will be taken

var myAnimals = ['Chickens', 'Cats', 'Rabbits'];

var listAnimals = function() {
  myAnimals = ['Ducks', 'Dogs', 'Lions'];
  for(var i=0;i<myAnimals.length; i++){
    console.log(i + ": " + myAnimals[i]);
  }
}

listAnimals();

// will print 0: Ducks, 1: Dogs, 2: Lions - the global variable myAnimals is overwritten with the values given inside the myAnimals function 

var suspectOne = 'Jay';
var suspectTwo = 'Val';
var suspectThree = 'Keith';
var suspectFour = 'Rick';

var allSuspects = function() {
  var suspectThree = 'Harvey'
  console.log('Suspects include: ' + suspectOne + ', ' + suspectTwo + ', ' + suspectThree + ', ' + suspectFour)
}

allSuspects();
console.log( 'Suspect three is:' + suspectThree )

// will print Suspects include: Jay, Val, Harvey, Rick - the local variable for suspectThree is used. Then print Suspect three is:Keith - as the console.log only has access to the global variable

var detective = {
  name : 'Ace Ventura',
  pet : 'monkey'
}

var printName = function(detective) {
  return detective.name
}

var detectiveInfo = function() {
  detective['name'] = 'Poirot'
  return printName(detective);
}

console.log(detectiveInfo());

// will print the detective object with name Poirot and pet monkey, as the name property of the global object detective is overwritten within the detectiveInfo obj
// I hadn't initially noticed that the printName method was called - I got the scope part right, but didn't notice that only the name property was being printed

var murderer = 'rick';

var outerFunction = function(){
  var murderer = 'marc';

  var innerFunction = function(){
    murderer = 'valerie';
  }
  innerFunction();
}

outerFunction();
console.log('the murderer is ', murderer);

// murderer will be initially updated to valerie when inner function is called. The outer function is then called and sets the murderer to marc. the murderer is marc will therefore be printed.
// ran the code and was wrong - followed through the function calls and assume that when outerFunction is called it creates a new variable called murderer with local scope and when innerFunction is called, it is the local variable which is updated to valerie. The global variable is therefore unchanged and prints the murderer is rick.