//your parameter variables go here!
var topY = 130 // top of tub
var wheelX = 155 //wheel center
var wheelY = 180 //wheel center
var handlex = 30 //handle center
//var handleY = 130 //handle center - I added this to (topY)
var Btubx = 80 // left bottem of tub
var BtubY = 170  // left bottem of tub
let wy = -0 //wheelbarrow placment
let psize = 10 //peddle size
let yy = 100 //yellow flower
let xy = 120 //yellow flower
let xb = 90 //blue flower
let yb = 110 //blue flowwer
let xw = 155 //gray flower
let yw = 120 //gray flower
let xr = 65 //red flower
let yr = 105 //red flower
let e = 0 //edge
let c = psize/2 //peddle cerve
var leafw = 10 //leaf width
var leafl = 30  //leaf lenth
var fully = 200 //lenth
var fullx = 200 //width
var rfp = fully-20 // right flower(and leaf) placement
let Wheelbarow = true //false
let plants = true //false

function setup_wallpaper(pWallpaper) {
  //pWallpaper.output_mode(DEVELOP_GLYPH);
  pWallpaper.output_mode(GRID_WALLPAPER);
  
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(true); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = fully;
  pWallpaper.grid_settings.cell_height = fullx;
  pWallpaper.grid_settings.row_offset  = 0;
}

function wallpaper_background() {
  background(150, 230, 255); //ligth blue
    
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function

  //plants in the wheelbarow
 line(100,topY,xy,yy)//yellow flower
 line(120,topY,xb,yb) //blue flower
 line(130,topY,xw,yw)//gray flower
 line(80,topY,xr,yr) //red flower
  strokeWeight()

 fill(225,200,0)
 
 //yellow flower 
 square(xy, yy-psize, psize, c, e, c, e)
 square(xy, yy, psize, e, c, e, c)
 square(xy-psize, yy, psize, c, e, c, e)
 square(xy-psize, yy-psize, psize, e, c, e, c)

 //blue flower
 fill(0,100,200)
 square(xb, yb-psize, psize, c, e, c, e)
 square(xb, yb, psize, e, c, e, c)
 square(xb-psize, yb, psize, c, e, c, e)
 square(xb-psize, yb-psize, psize, e, c, e, c)

 //gray flower
 fill(70, 4, 82)
 square(xw, yw-psize, psize, c, e, c, e)
 square(xw, yw, psize, e, c, e, c)
 square(xw-psize, yw, psize, c, e, c, e)
 square(xw-psize, yw-psize, psize, e, c, e, c)

 //red flower
 fill(255,0,100)
 square(xr, yr-psize, psize, c, e, c, e)
 square(xr, yr, psize, e, c, e, c)
 square(xr-psize, yr, psize, c, e, c, e)
 square(xr-psize, yr-psize, psize, e, c, e, c)
 
 fill(10, 135, 1);
 square(115,122,20,200,0,200,0)
 square(92,122,20,0,200,0,200)
 ellipse(80,138,20,40)
strokeWeight(1)
fill(255)
if(Wheelbarow){
  // the second wheelbarow
 /*strokeWeight(5);
 line(230,190,348,190);//bottem handle
 line(230,140,348,140);//top handle
 rect(348,160,5,5);//wheel
 strokeWeight(0.75);
 rect(250,140,100,50); //body */

 //first wheelbarow
 //tub
  quad(60, topY+wy, 165, topY+wy, 130, 165+wy, Btubx, BtubY+wy);
  
  //wheel
 ellipse(wheelX,wheelY+wy,25);

 strokeWeight(2);
  //stand
  line( Btubx, BtubY+wy, 67, 190+wy);
 //handle from wheel
  line(handlex,topY+wy,wheelX,wheelY+wy);

  strokeWeight(1); //back to normal
  
  fill(255);
  // new handle
  ellipse(handlex,topY+wy,17,7);

}

if(plants){
  strokeWeight();
  //blue
  fill(22, 3, 123);
 //flowers
  circle(20,20,10); //top left
  circle(rfp,20,20); //top right
  circle(rfp,180,10);//bottem right
  circle(20,180,30);//botem left

  //grean leaves
  fill(10, 135, 1);

  ellipse(50, 20, leafl, leafw);//top left
  ellipse(20, 50, leafw, leafl);//left top
  ellipse(rfp,50,leafw,leafl);//right top
  ellipse(rfp-30,20,leafl,leafw) //top right
  ellipse(rfp,150,leafw,leafl) //bottem right

 //transperent plants
 

}

  
}
