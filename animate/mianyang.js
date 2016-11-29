var heart = Snap("#heart");
  heart.attr({
  "transform":new Snap.Matrix().scale(0.0,0.0,326,124)
  });
var onOff = true;
  setTimeout(heartAni,6000);
  function heartAni(){
  	setInterval(function (){
    heart.animate({
    "transform":new Snap.Matrix().scale(0.5,0.5,326,124)
    },800,mina.bounce,function (){
    	heart.animate({
    		"transform":new Snap.Matrix().scale(2,2,326,124)
    	},200,mina.bounce)	
    });
  	},1000);
  };