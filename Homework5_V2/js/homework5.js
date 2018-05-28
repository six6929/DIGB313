var addBox;
var color;
var count= 0;
var randomTop = 0;
var randomLeft = 0;
var position;
var zMax = 1000;

document.querySelector('.change-color').addEventListener('click',change);

var addBtn = document.querySelector('.Add-square').addEventListener('click',add);

var outer = document.querySelector('#R');

// var that = document.getElementsByClassName('square');

// addBtn.addEventListener('click', function() {
//   color = getRandomColor();
//   // position = randomPosition();
//   addBox = document.createElement('div');
//   addBox.setAttribute('id','square'+count);
//   // addBox.setAttribute('class','square');
//   addBox.setAttribute('style', 'position: absolute; width: 60px; height: 60px; border: 1px solid #ddd; background:'+color+"; z-index="+count+";"+position);
//   outer.append(addBox);


//   var z = count;
//   callBack(z);
//   count++;
// });


function getRandomColor() {
    var hex = Math.floor(Math.random() * 0xFFFFFF);
    return "#" + ("000000" + hex.toString(16)).substr(-6);
}
// function randomPosition() {
//     randomTop = Math.floor(Math.random() * 420) + "px";
//     randomLeft = Math.floor(Math.random() * 650) + "px";
//     return "margin-top:"+randomTop+"; margin-left:"+randomLeft+";";
// }
function add(){
    color = getRandomColor();
    // position = randomPosition();
    randomTop = Math.floor(Math.random() * 420 + 80);
    randomLeft = Math.floor(Math.random() * 650+ 5);
    addBox = document.createElement('div');
    // addBox.setAttribute('id','square'+count);
    // addBox.setAttribute('style', 'position: absolute; width: 60px; height: 60px; border: 1px solid #ddd; background:'+color+"; z-index="+count+";"+position);
    // document.getElementById('#R').appendChild(addBox);
    addBox.classList.add('box',`box--${count}`);
    addBox.style.top = `${randomTop}px`;
    addBox.style.left = `${randomLeft}px`;
    addBox.style.backgroundColor = color;
    addBox.style.zIndex = 0;

    outer.appendChild(addBox);
    addBox.addEventListener('click', removeNode);

    count++;
}


// function callBack(z) {
//   document.querySelector('#square'+count).addEventListener('click', function(e) {
//     document.querySelector('#square'+z).style.zIndex = z++;
//   });
// }

// var removeNode = document.getElementById("#square");


function removeNode() {
  // document.querySelectorAll('.box').addEventListener('dblclick', function() {
  //   outer.removeChild('.box');  
  // });
  const target = event.srcElement;
  if (target.style.zIndex >= zMax) {
    outer.removeChild(target);
    zMax--;
  } else {
    target.style.zIndex = ++zMax;
  } 
} 


function change() {
  var boxes = document.querySelectorAll('.box');
  for (var i = 0; i <= boxes.length; i++) {
    boxes[i].style.backgroundColor = getRandomColor();
  }
}

window.onload = function() {
  var boxPreset = Math.floor(Math.random() * 20 + 30);
  for (var i = 0; i <= boxPreset; i++) {
    event.initEvent(add(), true, true);
  }
}