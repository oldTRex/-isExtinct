window.onload = function() {
     images = ["apple.jfif", "orange.jfif", "plum.jfif"];
     k = 0;  
}


function myFunction() {
    var randomColor = Math.floor(Math.random()*16777215).toString(16);

    k++;
    if (k >=  images.length ) k = 0;
    var image = images[k];
    console.log(k + ":" + image + " , random color : " + randomColor);
    
    var x = document.getElementById("myImg");
    var div1 = document.getElementById("demo");
    x.src = image;

    
    div1.style.backgroundColor  = "6600FF" ;
    console.log(div1.style);
   

var p = document.createElement("p")
var node = document.createTextNode("Some new text");

p.appendChild(node);

var div  = document.getElementById("demo");

div.appendChild(p)
}
   
var PNum  = 1;
function addChild(){
    var div  = document.getElementById("demo");
    var p1 = document.createElement("p" );
      PNum++;
    p1.id = "p"+ PNum;
    var node1 = document.createTextNode(" This is a paragraph. ");

    p1.appendChild(node1);
     
    div.appendChild(p1);
     
    console.log(div.childNodes);
    console.log(p1.id);
 
    
}

function deleteChild(){
   var parent1  = document.getElementById("demo");
   var child1  = document.getElementById("p" + PNum );
   console.log(child1 , PNum);
    if(child1 != null) {
        parent1.removeChild(child1);
        PNum--;
    }
  
}

// starting position
var pos = 0; 
//our box element
var box = document.getElementById("box");

function move() {
  if(pos >= 150) {
    clearInterval(t);
  }
  else {
    pos += 1;
    box.style.left = pos+"px";
  }
}


var t = setInterval(move, 5000); 

 var ts = document.getElementById("demoBtn");
 console.log(ts);
 
   ts.onclick  = function ()  {
   //document.body.innerHTML = Date();
   console.log("hi");
   }
   
   ts.addEventListener("click" , myFunction);

   function myFunction(){
        console.log(Math.random());
        ts.removeEventListener('click', myFunction);
   }

  function  change() {
    inp1 = document.getElementById("name");
    inp1.value = inp1.value.toUpperCase();
  }

  ts.addEventListener("mouseover", mouseover);

function mouseover() {
  console.log("Hello World!");
}
 

function validate() {
  var n1 = document.getElementById("num1");
  var n2 = document.getElementById("num2");
   if(n1.value != "" && n2.value != "" ){
        if(n1.value == n2.value){
          return true; 
        }
   }
   let name = 'David';
   let msg  = ` welcome ${name}! `;
   alert( msg )
}


const obj1 = {
  a: 0,
  b: 2,
  c: 4
};


const obj2 = Object.assign({c: 4, d: 6}, obj1);

console.log(obj2.c, obj2.d);


