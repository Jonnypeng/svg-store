var heart = Snap("#heart");
  heart.attr({
  "transform":new Snap.Matrix().scale(0.0,0.0,326,124)
  });

  setTimeout(heartAni,5000);
  function heartAni(){
    heart.animate({
    "transform":new Snap.Matrix().scale(2,2,326,124)
    },1000,mina.bounce);
  };