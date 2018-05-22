var addBox;
var color;
var count= 0;
var randomTop = 0;
var randomLeft = 0;
var position;

document.querySelector('.change-color').addEventListener('click',change);

var addBtn = document.querySelector('.Add-square');

var outer = document.querySelector('#R');

// var that = document.getElemntsByClassName('square');

addBtn.addEventListener('click', function() {
  color = getRandomColor();
  position = randomPosition();
  addBox = document.createElement('div');
  addBox.setAttribute('id','square'+count);
  // addBox.setAttribute('class','square');
  addBox.setAttribute('style', 'position: absolute; width: 60px; height: 60px; border: 1px solid #ddd; background:'+color+"; z-index="+count+";"+position);
  outer.append(addBox);

  count++;
});


function getRandomColor() {
    var hex = Math.floor(Math.random() * 0xFFFFFF);
    return "#" + ("000000" + hex.toString(16)).substr(-6);
}
function randomPosition() {
    randomTop = Math.floor(Math.random() * 420) + "px";
    randomLeft = Math.floor(Math.random() * 650) + "px";
    return "margin-top:"+randomTop+"; margin-left:"+randomLeft+";";
}
function add(){
    color = getRandomColor();
    position = randomPosition();
    addBox = document.createElement('div');
    addBox.setAttribute('id','square'+count);
    addBox.setAttribute('class','square');
    addBox.setAttribute('style', 'position: absolute; width: 60px; height: 60px; border: 1px solid #ddd; background:'+color+"; z-index="+count+";"+position);
    document.getElementById('#R').appendChild(addBox);
    count++;
}
function change() {
    for(var i=0; i<count; i++) {
       color = getRandomColor();
       document.getElementById('square'+i).style.background = color;
    }
}

function refreshBox() {
  const target = event.srcElement;
  if (target.style.zIndex >= count) {
    rootNode.removeChild(target);
  }
  target.style.zIndex = count;
}
