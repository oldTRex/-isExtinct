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
console.log(d,h);
while( d > 360  && h > 60) alert("you won!");