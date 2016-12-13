var s0 = Snap("#path0");
var s1 = Snap("#path1")
s0.animate({
	"d":s1.attr("d")
},400,mina.linear);