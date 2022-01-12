var d= 0;
var h=0;

document.write("<h1>hello</h1>")

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
document.write(x)