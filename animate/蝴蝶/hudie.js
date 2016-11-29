var leftF = Snap("#left_f");
var rightF = Snap("#right_f");
var leftN = Snap("#left_n");
var rightN = Snap("#right_n");

setInterval(ani,1000);
ani();
function ani(){
	leftF.animate({
	"transform":new Snap.Matrix().scale(1,-1,67.289261,231.7657)
},400,mina.linear,function (){
	leftF.animate({
	"transform":new Snap.Matrix().scale(1,1,67.289261,231.7657)
	},400,mina.linear)	
});
rightF.animate({
	"transform":new Snap.Matrix().scale(1,-1,67.289261,231.7657)
},350,mina.linear,function (){
	rightF.animate({
	"transform":new Snap.Matrix().scale(1,1,67.289261,231.7657)
	},350,mina.linear)	
});
leftN.animate({
	"transform":new Snap.Matrix().scale(1,-1,67.289261,231.7657)
},500,mina.linear,function (){
	leftN.animate({
	"transform":new Snap.Matrix().scale(1,1,67.289261,231.7657)
	},500,mina.linear)	
});
rightN.animate({
	"transform":new Snap.Matrix().scale(1,-1,67.289261,231.7657)
},450,mina.linear,function (){
	rightN.animate({
	"transform":new Snap.Matrix().scale(1,1,67.289261,231.7657)
	},450,mina.linear)	
});
};
