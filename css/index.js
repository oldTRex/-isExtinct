var d= 0;
var h=0;


async function right() {
    var x = document.getElementsByClassName("rotate");
    d+=30;
    var trans  = `translate(${d}px , ${h}px)`;
      console.log(trans);
    x[0].style.transform =  trans;
    
}

async function left() {
    var x = document.getElementsByClassName("rotate");
     d-=30;
     var trans  = `translate(${d}px , ${h}px)`;
      console.log(trans);
    x[0].style.transform =  trans;
    
}

async function up() {
    var x = document.getElementsByClassName("rotate");
     h-=30;
    var trans  = `translate(${d}px , ${h}px)`;
      console.log(trans);
    x[0].style.transform =  trans;
    
}

async function down() {
    var x = document.getElementsByClassName("rotate");
     h+=30;
    var trans  = `translate(${d}px , ${h}px)`;
    console.log(trans);
    x[0].style.transform =  trans;
    
}
 
//alert(eval("10 * 20 + 8"));
var x =  '324' * 5;
//document.write(x);

//var bool = confirm("you want to exit ?");
 

function getTime(){
  var d = new Date();
  var seconds =  d.getSeconds();
  var minutes =  d.getMinutes();
  var hours =  d.getHours();
  document.body.innerHTML =  hours + " : " + minutes + " : " + seconds ;
}

//setInterval( getTime , 1000)
    
var x = document.getElementById("myImg") ;
console.log( x )

// el.src = "apple.jfif";
var images = [ ]
images.push("apple.jfif");    
images.push("orange.jfif")
var i = 0;

function changeImage(){
  var image = images.shift();
   console.log(image  );
// el.src = image;
}
setInterval( changeImage , 1000)