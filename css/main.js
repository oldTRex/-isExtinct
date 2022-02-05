var depth = 42
//your code goes here
var days = 0;
var i  = 0;
while( i <  depth ) {     
  i = i + 7 ;  
  days++;
  if(i >= depth) break;
  i = i - 2;

}
 
console.log(days);

function getTime(){
  var d = new Date();
  var hours =  d.getHours();
  document.body.innerHTML = hours;
}

setInterval( getTime ,30000)