$(document).ready(function() {

var addBox;
var color;
var count= 0;
var randomTop = 0;
var randomLeft = 0;
var position;
var zMax = 1000;


$('.change-color').click(change);


var $addBtn = $(".Add-square")

$addBtn.click(add);

var $outer = $('#R');

function getRandomColor() {
    var hex = Math.floor(Math.random() * 0xFFFFFF);
    return "#" + ("000000" + hex.toString(16)).substr(-6);
};

function add(){
    color = getRandomColor();
    randomTop = Math.floor(Math.random() * 420 + 80);
    randomLeft = Math.floor(Math.random() * 650+ 5);
    addBox = $('<div></div>');

    $(addBox).addClass('box');
    $(addBox).css({
      top : randomTop + 'px',
      left : randomLeft + 'px',
      backgroundColor : color,
      zIndex : 0
    });
    $outer.append(addBox);
    $(addBox).click(removeNode);

    count++;
    $('.box').dblclick(function(){
       $(this).remove()
    });
};


function removeNode() {
  const target = event.srcElement;
  if (target.style.zIndex >= zMax) {
    $outer.remove(target)
    zMax--;
  } else {
    target.style.zIndex = ++zMax;
  }
};


function change() {
  var boxes = $('.box');
  for (var i = 0; i <= boxes.length; i++) {
    boxes[i].style.backgroundColor = getRandomColor();
  };
};


window.onload = function() {
  var boxPreset = Math.floor(Math.random() * 20 + 30);
  for (var i = 0; i <= boxPreset; i++) {
    event.initEvent(add(), true, true);
  }
};

});
