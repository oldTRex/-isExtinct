
images = ["apple.jfif", "orange.jfif", "plum.jfif"];
k = 0;
function myFunction() {
    var randomColor = Math.floor(Math.random()*16777215).toString(16);

    if (k > 2) k = 0;
    var image = images[k];
    console.log(k + ":" + image + " , random color : " + randomColor);
    
    var x = document.getElementById("myImg");
    var div1 = document.getElementById("demo");
    x.src = image;

    
    div1.style.backgroundColor  = "6600FF" ;
    console.log(div1.style);
    k++;

var p = document.createElement("p")
var node = document.createTextNode("Some new text");

p.appendChild(node);

var div  = document.getElementById("demo");

div.appendChild(p)
}
   

function addChild(){
    var div  = document.getElementById("demo");
    var p1 = document.createElement("p");
    var p2 = document.createElement("p");
    
    var node1 = document.createTextNode(" This is a paragraph. ");

    p1.appendChild(node1);
    p2.appendChild(node1);
    
    div.appendChild(p1);
    div.appendChild(p2);

 //   p1.innerText = " This is a paragraph. ";
 //   p2.innerText = " This is another paragraph. ";
    
}

function removeChild(){
    var p1 = document.createElement("p");
    var p2 = document.createElement("p");
    p1.innerText = " This is a paragraph. ";
    p2.innerText = " This is another paragraph. ";
}




